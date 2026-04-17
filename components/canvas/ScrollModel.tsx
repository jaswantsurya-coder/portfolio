"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function ScrollModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <MeshDistortMaterial
          color="#ffffff"
          speed={2}
          distort={0.4}
          radius={1}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}
