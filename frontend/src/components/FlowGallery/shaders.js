
// Custom shader for the liquid/distortion effect
export const fluidImageShader = {
  vertexShader: `
    uniform float uTime;
    uniform float uHover;
    uniform float uRadius;
    varying vec2 vUv;
    varying float vHover;

    void main() {
      vUv = uv;
      vHover = uHover;
      
      vec3 pos = position;
      
      // Liquid distortion on hover
      float noise = sin(pos.x * 10.0 + uTime) * cos(pos.y * 10.0 + uTime) * 0.1;
      pos.z += noise * uHover;
      
      // Gentle floating movement
      pos.y += sin(uTime * 0.5 + pos.x) * 0.05;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform float uHover;
    uniform float uScroll; // Chromatic aberration intensity
    uniform float uGrain;
    uniform float uRadius;
    uniform vec2 uResolution;
    
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    // Rounded Box SDF for dynamic border radius
    float roundedBoxSDF(vec2 CenterPosition, vec2 Size, float Radius) {
        return length(max(abs(CenterPosition)-Size+Radius,0.0))-Radius;
    }

    void main() {
      vec2 uv = vUv;
      
      // Chromatic Aberration
      float shift = uScroll * 0.02 + uHover * 0.01;
      vec4 color;
      color.r = texture2D(uTexture, uv + vec2(shift, 0.0)).r;
      color.g = texture2D(uTexture, uv).g;
      color.b = texture2D(uTexture, uv - vec2(shift, 0.0)).b;
      color.a = texture2D(uTexture, uv).a;

      // Grain
      float grain = snoise(uv * 100.0 + uTime * 2.0) * uGrain;
      color.rgb += grain;

      // Dynamic Border Radius (SDF)
      // Map UV (0..1) to (-0.5..0.5) for SDF
      vec2 pos = uv - 0.5;
      vec2 size = vec2(0.5); 
      float radius = uRadius * (1.0 + sin(uTime * 3.0) * 0.1); // Micro-oscillations
      
      // Calculate distance field
      // Adjust aspect ratio if needed, assuming square for now or handled by plane geo
      float dist = roundedBoxSDF(pos, size, radius);
      
      // Smooth alpha for edges
      float alpha = 1.0 - smoothstep(0.0, 0.01, dist);
      
      gl_FragColor = vec4(color.rgb, color.a * alpha);
    }
  `
};
