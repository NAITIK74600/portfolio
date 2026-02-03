'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function FloatingGeometry({ mousePosition }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Parallax effect based on mouse
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mousePosition.y * 0.3,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mousePosition.x * 0.3,
        0.05
      );

      // Idle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;

      // Click animation
      if (clicked) {
        meshRef.current.rotation.z += 0.1;
        if (meshRef.current.rotation.z > Math.PI * 2) {
          setClicked(false);
          meshRef.current.rotation.z = 0;
        }
      }
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(true)}
        scale={hovered ? 1.15 : 1}
      >
        {/* Main geometric shape - Torus Knot */}
        <torusKnotGeometry args={[1, 0.3, 128, 16, 2, 3]} />
        <meshPhysicalMaterial
          color={hovered ? '#8b5cf6' : '#6366f1'}
          metalness={0.9}
          roughness={0.1}
          transmission={0.2}
          thickness={0.5}
          envMapIntensity={1.5}
          emissive={hovered ? '#7c3aed' : '#4f46e5'}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>

      {/* Orbiting rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshPhysicalMaterial
          color="#06b6d4"
          metalness={1}
          roughness={0}
          emissive="#06b6d4"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Secondary ring */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.2, 0.03, 16, 100]} />
        <meshPhysicalMaterial
          color="#a855f7"
          metalness={1}
          roughness={0}
          emissive="#a855f7"
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

function Scene({ mousePosition }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        color="#8b5cf6"
      />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#06b6d4"
      />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#a855f7" />

      {/* Main 3D Element */}
      <FloatingGeometry mousePosition={mousePosition} />

      {/* Environment for reflections */}
      <Environment preset="night" />

      {/* Subtle orbit controls for cinematic feel */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        dampingFactor={0.05}
        rotateSpeed={0.3}
      />
    </>
  );
}

function SignatureLogo() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div
        className="relative pointer-events-auto cursor-pointer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{
          y: [0, -10, 0],
          rotate: hovered ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 0.5,
          },
        }}
      >
        <motion.div
          className="text-white font-bold text-6xl md:text-8xl tracking-wider relative"
          style={{
            fontFamily: "'Brush Script MT', cursive",
            textShadow: hovered
              ? '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)'
              : '0 0 20px rgba(139, 92, 246, 0.5)',
            filter: hovered ? 'brightness(1.3)' : 'brightness(1)',
          }}
          animate={{
            filter: hovered
              ? [
                  'brightness(1) drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))',
                  'brightness(1.3) drop-shadow(0 0 30px rgba(139, 92, 246, 1))',
                  'brightness(1) drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))',
                ]
              : 'brightness(1) drop-shadow(0 0 5px rgba(139, 92, 246, 0.5))',
          }}
          transition={{ duration: 1.5, repeat: hovered ? Infinity : 0 }}
        >
          <span className="inline-block">
            <span className="text-purple-400 text-7xl md:text-9xl mr-2">N</span>
            aitik Raj
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Premium3DBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Pure black background with subtle gradient */}
      <div className="fixed inset-0 -z-20 bg-black">
        <div className="absolute inset-0 bg-gradient-radial from-purple-950/20 via-black to-black" />
      </div>

      {/* 3D Canvas */}
      <div className="fixed inset-0 -z-10">
        <Canvas
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 2]}
        >
          <Scene mousePosition={mousePosition} />
        </Canvas>
      </div>

      {/* Signature Logo Overlay */}
      <SignatureLogo />

      {/* Subtle vignette */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/60" />
    </>
  );
}
