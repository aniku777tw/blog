import { useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function ColaBottle({ scale = 15 , index= 0}: { scale: number , index: number}) {
  const { scene: modelScene } = useGLTF('/models/can.glb');

  const scene = useMemo(() => {
    return modelScene.clone();
  }, [modelScene]);

  const rotationSpeed = useMemo(() => ({
    x: (Math.random() * 0.0002 + 0.001 + index * 0.0001) * (Math.random() > 0.5 ? 1 : -1),
    y: (Math.random() * 0.0002 + 0.001 + index * 0.0001) * (Math.random() > 0.5 ? 1 : -1),
    z: (Math.random() * 0.0002 + 0.001 + index * 0.0001) * (Math.random() > 0.5 ? 1 : -1),
  }), [index]);

  const [targetPosition, setTargetPosition] = useState({
    x: Math.random() * 50 - 25,
    y: Math.random() * 50 - 25,
    z: Math.random() * 50 - 25,
  });
  
  const [currentPosition, setCurrentPosition] = useState(targetPosition);

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetPosition({
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25,
        z: Math.random() * 50 - 25,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    const lerpSpeed = index * 0.000005;
    const newPos = new THREE.Vector3().lerpVectors(
      new THREE.Vector3(currentPosition.x, currentPosition.y, currentPosition.z),
      new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z),
      lerpSpeed
    );

    if (scene) {
      scene.position.set(newPos.x, newPos.y, newPos.z);
      scene.rotation.x += rotationSpeed.x;
      scene.rotation.y += rotationSpeed.y;
      scene.rotation.z += rotationSpeed.z;
    }

    setCurrentPosition({
      x: newPos.x,
      y: newPos.y,
      z: newPos.z,
    });
  });

  return (
    <primitive
      object={scene}
      scale={[scale, scale, scale]}
    />
  );
}

export default function ColaField() {
  const bottleCount = 30;

  return (
    <>
      {Array.from({ length: bottleCount }).map((_, index) => (
        <ColaBottle key={index} index={index} scale={Math.random() * 10 + 5} />
      ))}
    </>
  );
}
