import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { fluidImageShader } from './shaders';

const FloatingImage = ({ url, position, index, setHoveredIndex }) => {
  const meshRef = useRef();
  const materialRef = useRef();
  const [hovered, setHover] = useState(false);
  
  // Load texture
  const texture = useTexture(url, (txt) => {
    txt.minFilter = THREE.LinearFilter;
    txt.magFilter = THREE.LinearFilter;
    txt.needsUpdate = true;
  });

  // Initial random offset for organic movement
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);
  const randomPhase = useMemo(() => Math.random() * Math.PI * 2, []);

  // Physics state
  const velocity = useRef(new THREE.Vector3(0, 0, 0));
  
  // Shader uniforms
  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTime: { value: 0 },
      uHover: { value: 0 },
      uScroll: { value: 0 },
      uGrain: { value: 0.05 },
      uRadius: { value: 0.1 },
      uResolution: { value: new THREE.Vector2(1, 1) }
    }),
    [texture]
  );

  useFrame((state, delta) => {
    if (!meshRef.current || !materialRef.current) return;

    // 1. Time update
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

    // 2. Magnetic Parallax & Hover Expansion
    // Convert 3D position to screen space to check mouse distance
    const screenPos = initialPos.clone().project(state.camera);
    // Simple 3D distance check from pointer raycaster would be more accurate for "Magnetic" feel in 3D
    // But let's use the actual raycaster distance since we are in 3D
    
    // Smooth hover transition (GSAP-like lerp in frame loop)
    const targetHover = hovered ? 1.0 : 0.0;
    materialRef.current.uniforms.uHover.value = THREE.MathUtils.lerp(
      materialRef.current.uniforms.uHover.value,
      targetHover,
      0.1
    );

    // Scale effect (Magnetic Expansion)
    const targetScale = hovered ? 1.3 : 1.0;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), 0.1);

    // 3. Repulsion Physics
    // This requires knowing other objects' positions. 
    // For simplicity/performance in this component, we simulate "floating" and mouse repulsion
    // Mouse repulsion:
    const mouse3D = new THREE.Vector3(state.pointer.x, state.pointer.y, 0).unproject(state.camera);
    mouse3D.z = 0; // Assume plane is mostly at z=0 for interaction calculation
    
    const distance = meshRef.current.position.distanceTo(mouse3D);
    const repulsionRadius = 2.0; // roughly 150px equivalent in world units depending on camera
    
    if (distance < repulsionRadius) {
      const force = mouse3D.sub(meshRef.current.position).normalize().multiplyScalar(-0.02); // Push away
      velocity.current.add(force);
    }

    // Return to original position (Spring force)
    const springForce = initialPos.clone().sub(meshRef.current.position).multiplyScalar(0.05);
    velocity.current.add(springForce);

    // Damping (Friction)
    velocity.current.multiplyScalar(0.9);

    // Apply velocity
    meshRef.current.position.add(velocity.current);

    // Add organic floating motion
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + randomPhase) * 0.002;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
        setHoveredIndex(index);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHover(false);
        setHoveredIndex(null);
        document.body.style.cursor = 'auto';
      }}
    >
      <planeGeometry args={[1.5, 2, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={fluidImageShader.vertexShader}
        fragmentShader={fluidImageShader.fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
};

export default FloatingImage;
