'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

// Particle system representing raw data
function DataParticles({ scrollProgress, mousePosition }) {
  const particlesRef = useRef();
  const linesRef = useRef();
  
  const particleCount = 200;
  
  const { positions, connections } = useMemo(() => {
    const pos = [];
    const conn = [];
    
    for (let i = 0; i < particleCount; i++) {
      pos.push(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
    }
    
    // Create connections for neural network effect
    for (let i = 0; i < particleCount; i++) {
      const connectionsPerNode = 3;
      for (let j = 0; j < connectionsPerNode; j++) {
        const targetIndex = Math.floor(Math.random() * particleCount);
        if (targetIndex !== i) {
          conn.push(
            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
            pos[targetIndex * 3], pos[targetIndex * 3 + 1], pos[targetIndex * 3 + 2]
          );
        }
      }
    }
    
    return { positions: new Float32Array(pos), connections: new Float32Array(conn) };
  }, []);

  useFrame(() => {
    if (!particlesRef.current || !linesRef.current) return;
    
    const scroll = scrollProgress.get();
    
    // Stage 1 (0-0.25): Chaotic floating particles (raw data)
    // Stage 2 (0.25-0.5): Form connections (learning)
    // Stage 3 (0.5-0.75): Organized structure (intelligence)
    // Stage 4 (0.75-1): Converge to center (prediction)
    
    const geometry = particlesRef.current.geometry;
    const positions = geometry.attributes.position.array;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const originalX = positions[i3];
      const originalY = positions[i3 + 1];
      const originalZ = positions[i3 + 2];
      
      let x = originalX;
      let y = originalY;
      let z = originalZ;
      
      // Stage 1: Random floating
      if (scroll < 0.25) {
        const chaos = 1 - (scroll / 0.25);
        x += Math.sin(Date.now() * 0.001 + i) * 0.5 * chaos;
        y += Math.cos(Date.now() * 0.001 + i) * 0.5 * chaos;
      }
      
      // Stage 2-3: Form network structure
      if (scroll >= 0.25 && scroll < 0.75) {
        const networkProgress = (scroll - 0.25) / 0.5;
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 15 + Math.sin(angle * 3) * 5;
        const height = Math.sin(angle * 2) * 10;
        
        const targetX = Math.cos(angle) * radius;
        const targetY = height;
        const targetZ = Math.sin(angle) * radius;
        
        x = THREE.MathUtils.lerp(originalX, targetX, networkProgress);
        y = THREE.MathUtils.lerp(originalY, targetY, networkProgress);
        z = THREE.MathUtils.lerp(originalZ, targetZ, networkProgress);
      }
      
      // Stage 4: Converge to center (prediction)
      if (scroll >= 0.75) {
        const convergeProgress = (scroll - 0.75) / 0.25;
        x = THREE.MathUtils.lerp(x, 0, convergeProgress * 0.8);
        y = THREE.MathUtils.lerp(y, 0, convergeProgress * 0.8);
        z = THREE.MathUtils.lerp(z, 0, convergeProgress * 0.8);
      }
      
      // Mouse influence
      x += mousePosition.x * 0.5;
      y += mousePosition.y * 0.5;
      
      geometry.attributes.position.array[i3] = x;
      geometry.attributes.position.array[i3 + 1] = y;
      geometry.attributes.position.array[i3 + 2] = z;
    }
    
    geometry.attributes.position.needsUpdate = true;
    
    // Lines opacity based on scroll (connections appear during learning phase)
    const lineOpacity = scroll < 0.25 ? 0 : scroll < 0.75 ? (scroll - 0.25) * 2 : 1;
    linesRef.current.material.opacity = lineOpacity * 0.3;
    
    // Particle size grows with intelligence
    const particleSize = 0.1 + scroll * 0.3;
    particlesRef.current.material.size = particleSize;
    
    // Color transition: blue → cyan → purple → bright white
    const color = new THREE.Color();
    if (scroll < 0.33) {
      color.setHSL(0.6, 1, 0.5); // Blue
    } else if (scroll < 0.66) {
      color.lerpColors(
        new THREE.Color(0x0ea5e9),
        new THREE.Color(0x8b5cf6),
        (scroll - 0.33) / 0.33
      );
    } else {
      color.lerpColors(
        new THREE.Color(0x8b5cf6),
        new THREE.Color(0xffffff),
        (scroll - 0.66) / 0.34
      );
    }
    particlesRef.current.material.color = color;
  });

  return (
    <>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#0ea5e9"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0}
        />
      </lineSegments>
    </>
  );
}

// Central prediction node that appears at the end
function PredictionNode({ scrollProgress }) {
  const meshRef = useRef();
  
  useFrame(() => {
    if (!meshRef.current) return;
    
    const scroll = scrollProgress.get();
    
    // Appears only in final stage
    const nodeProgress = scroll < 0.75 ? 0 : (scroll - 0.75) / 0.25;
    
    meshRef.current.scale.setScalar(nodeProgress * 3);
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.01;
    
    // Pulse effect
    const pulse = Math.sin(Date.now() * 0.003) * 0.2 + 1;
    meshRef.current.material.emissiveIntensity = nodeProgress * pulse;
  });
  
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#8b5cf6"
        emissiveIntensity={0}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

// Rotating geometric wireframes
function GeometricShapes({ scrollProgress }) {
  const groupRef = useRef();
  
  useFrame(() => {
    if (!groupRef.current) return;
    
    const scroll = scrollProgress.get();
    groupRef.current.rotation.x = scroll * Math.PI * 2;
    groupRef.current.rotation.y = scroll * Math.PI * 3;
    
    // Fade in during middle stages
    const opacity = scroll < 0.3 ? scroll * 3 : scroll > 0.7 ? (1 - scroll) * 3 : 1;
    groupRef.current.children.forEach(child => {
      child.material.opacity = opacity * 0.15;
    });
  });
  
  return (
    <group ref={groupRef}>
      {/* Torus */}
      <mesh position={[10, 5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[5, 0.5, 16, 100]} />
        <meshBasicMaterial color="#4f46e5" wireframe transparent opacity={0.15} />
      </mesh>
      
      {/* Octahedron */}
      <mesh position={[-10, -5, 5]} rotation={[Math.PI / 4, 0, 0]}>
        <octahedronGeometry args={[4, 0]} />
        <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.15} />
      </mesh>
      
      {/* Dodecahedron */}
      <mesh position={[0, -8, -10]}>
        <dodecahedronGeometry args={[3, 0]} />
        <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.15} />
      </mesh>
      
      {/* Torus Knot */}
      <mesh position={[-8, 8, -5]}>
        <torusKnotGeometry args={[3, 0.5, 64, 8]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

// DNA Helix structure
function DNAHelix({ scrollProgress }) {
  const groupRef = useRef();
  
  const helixPoints = useMemo(() => {
    const points = [];
    const strands = 2;
    const height = 40;
    const radius = 3;
    const segments = 100;
    
    for (let strand = 0; strand < strands; strand++) {
      for (let i = 0; i < segments; i++) {
        const t = i / segments;
        const angle = t * Math.PI * 8 + (strand * Math.PI);
        const y = t * height - height / 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        points.push({ x, y, z, strand });
      }
    }
    return points;
  }, []);
  
  useFrame(() => {
    if (!groupRef.current) return;
    
    const scroll = scrollProgress.get();
    groupRef.current.rotation.y = scroll * Math.PI * 4;
    
    // Fade visibility based on scroll stage
    const visible = scroll > 0.2 && scroll < 0.6;
    const opacity = visible ? Math.sin((scroll - 0.2) / 0.4 * Math.PI) * 0.4 : 0;
    
    groupRef.current.children.forEach(child => {
      child.material.opacity = opacity;
    });
  });
  
  return (
    <group ref={groupRef}>
      {helixPoints.map((point, i) => (
        <mesh key={i} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshBasicMaterial 
            color={point.strand === 0 ? "#0ea5e9" : "#8b5cf6"} 
            transparent 
            opacity={0}
          />
        </mesh>
      ))}
    </group>
  );
}

// Camera controller based on scroll
function ScrollCamera({ scrollProgress, mousePosition }) {
  const { camera } = useThree();
  
  useFrame(() => {
    const scroll = scrollProgress.get();
    
    // Camera journey through the scene
    // Stage 1: Wide view of chaos
    // Stage 2: Move closer to observe connections
    // Stage 3: Orbit around the structure
    // Stage 4: Focus on center
    
    const radius = 40 - scroll * 20; // Zoom in as we scroll
    const angle = scroll * Math.PI * 2; // Rotate around
    const height = Math.sin(scroll * Math.PI) * 10; // Arc movement
    
    camera.position.x = Math.cos(angle) * radius + mousePosition.x * 2;
    camera.position.y = height + mousePosition.y * 2;
    camera.position.z = Math.sin(angle) * radius;
    
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

// Main component
export default function ScrollStory3D() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    setIsMobile(window.innerWidth < 768);
    
    const handleMouseMove = (e) => {
      if (isMobile) return;
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [30, 10, 30], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: !isMobile,
          powerPreference: isMobile ? 'low-power' : 'high-performance'
        }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
        <pointLight position={[0, 15, 0]} intensity={0.5} color="#06b6d4" />
        
        <DataParticles 
          scrollProgress={scrollYProgress} 
          mousePosition={mousePosition}
        />
        <PredictionNode scrollProgress={scrollYProgress} />
        <GeometricShapes scrollProgress={scrollYProgress} />
        <DNAHelix scrollProgress={scrollYProgress} />
        <ScrollCamera 
          scrollProgress={scrollYProgress}
          mousePosition={mousePosition}
        />
      </Canvas>
    </div>
  );
}
