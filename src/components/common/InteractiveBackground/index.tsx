'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, useProgress } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import ColaCan from './ColaCan';
import Spinner from '../Spinner';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0005;
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <Points ref={pointsRef} positions={generateParticles(5000)} stride={3}>
      <PointMaterial color="#44CCFF" size={0.03} sizeAttenuation />
    </Points>
  );
}

// Particle generator
const generateParticles = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  return positions;
};

export default function CyberBackground() {
  const { progress } = useProgress();
  return (
    <>
      <Canvas
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
        camera={{ position: [0, 0, 7], fov: 75 }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} />
        <ColaCan />
        <ParticleField />
      </Canvas>
      <Spinner progress={progress} />
    </>
  );
}
