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

  // Determine offset based on viewport width (simplistic approach for 3D)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      {/* Offset mesh to the right so it balances the left-aligned text */}
      <mesh ref={meshRef} position={isMobile ? [0, -1, 0] : [2, 0, -1]}>
        <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
        <MeshDistortMaterial
          color="#0D9488"
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
