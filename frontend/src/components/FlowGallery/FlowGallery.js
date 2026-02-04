import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, ScrollControls, Scroll } from '@react-three/drei';
import FloatingImage from './FloatingImage';
import { EffectComposer, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

const images = [
  "/assets/gallery/nail1.jpg",
  "/assets/gallery/nail2.jpg",
  "/assets/gallery/nail3.jpg",
  "/assets/gallery/nail4.jpg",
  "/assets/gallery/nail5.jpg",
  "/assets/gallery/nail6.jpg",
  "/assets/gallery/nail7.jpg",
  "/assets/gallery/nail8.jpg"
];

// Random positions for "floating freely" feel
const positions = [
  [-2.5, 1.5, 0],
  [0, 0.5, 1],
  [2.5, 1.5, 0],
  [-3.5, -1.5, -1],
  [-1, -2, 0.5],
  [1.5, -1.5, -0.5],
  [3.5, -2, 0],
  [0, 3, -2]
];

const FlowGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full h-[800px] relative bg-black">
      <div className="absolute top-8 left-0 right-0 z-10 text-center pointer-events-none">
        <h2 className="text-4xl font-serif font-light text-white tracking-widest opacity-80">
          THE FLOW STATE GALLERY
        </h2>
        <p className="text-xs uppercase tracking-[0.3em] text-accent mt-2">
          Immersive Nail Art Experience
        </p>
      </div>

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 50 }}>
        <color attach="background" args={['#050505']} />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          
          {/* Main lighting to ensure images are visible */}
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          <Float 
            speed={2} 
            rotationIntensity={0.2} 
            floatIntensity={0.5} 
            floatingRange={[-0.1, 0.1]}
          >
            {images.map((url, i) => (
              <FloatingImage 
                key={i} 
                url={url} 
                position={positions[i]} 
                index={i}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </Float>

          <EffectComposer>
            <Noise opacity={0.05} blendFunction={BlendFunction.OVERLAY} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <ChromaticAberration 
              offset={[0.002, 0.002]} // Static subtle, shader handles dynamic
              blendFunction={BlendFunction.NORMAL}
              radialModulation={false}
              modulationOffset={0}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
      
      {/* Accessibility / Loading Fallback */}
      <div className="sr-only">
        {images.map((url, i) => (
          <img key={i} src={url} alt={`Nail Art Masterpiece ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default FlowGallery;
