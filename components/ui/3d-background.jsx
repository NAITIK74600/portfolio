'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const mesh = useRef();
  const { scrollYProgress } = useScroll();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle;
      
      const t = (particle.time += speed);
      
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );

      const s = Math.cos(t);
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    
    // Rotate based on scroll
    if (mesh.current) {
      mesh.current.rotation.y = scrollYProgress.get() * Math.PI * 2;
      mesh.current.rotation.x = scrollYProgress.get() * Math.PI;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[0.5, 0]} />
      <meshPhongMaterial color="#4f46e5" emissive="#2563eb" emissiveIntensity={0.5} />
    </instancedMesh>
  );
}

function FloatingCubes() {
  const groupRef = useRef();
  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    const scroll = scrollYProgress.get();
    if (groupRef.current) {
      groupRef.current.rotation.x = scroll * Math.PI * 2;
      groupRef.current.rotation.y = scroll * Math.PI * 3;
      groupRef.current.position.z = -scroll * 50;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
          ]}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
          ]}
        >
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color="#7c3aed"
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

function NeuralNetwork() {
  const pointsRef = useRef();
  const { scrollYProgress } = useScroll();

  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 80
        )
      );
    }
    return temp;
  }, []);

  useFrame(() => {
    const scroll = scrollYProgress.get();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = scroll * Math.PI * 4;
      pointsRef.current.scale.setScalar(1 + scroll * 2);
    }
  });

  return (
    <group ref={pointsRef}>
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.3, 8, 8]} />
          <meshBasicMaterial color="#06b6d4" />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
        <Particles count={1000} />
        <FloatingCubes />
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
