"use client";

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useOrbitStore } from '@/hooks/useOrbitStore';
import { SKILLS } from '@/data/content';

export default function SkillCard3D({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { rotation, activeSkillIndex } = useOrbitStore();

  const skill = SKILLS[index];

  // Use a Vector3 to define the base spherical position (Phase 2: Geometry approach)
  // We place them on a circle in XZ plane, but we can easily expand this to a full sphere
  const basePosition = useMemo(() => {
    const angle = (index / SKILLS.length) * Math.PI * 2;
    return new THREE.Vector3(
      Math.cos(angle) * 5,
      0,
      Math.sin(angle) * 5
    );
  }, [index]);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Rotate the base position vector by the current rotation angle around Y axis
    const currentPos = basePosition.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), rotation);
    meshRef.current.position.copy(currentPos);

    // Always look at the center of the orbit
    meshRef.current.lookAt(0, 0, 0);

    const isCenter = activeSkillIndex === index;
    const targetScale = isCenter ? 1.3 : 1.0;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.2, 3, 0.1]} />
        <MeshDistortMaterial
          color={activeSkillIndex === index ? "#60a5fa" : "#18181b"}
          speed={1}
          distort={0.1}
          roughness={0.2}
          metalness={0.8}
        />
        <Text
          position={[0, 0.5, 0.06]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.category}
        </Text>

        {/* Stacked Logos Placeholder - In a real app, these would be mapped textures or small meshes */}
        <group position={[0, -0.5, 0.06]}>
          {skill.items.map((item, i) => (
            <Text
              key={item}
              position={[0, -i * 0.2, 0]}
              fontSize={0.1}
              color="#94a3b8"
              anchorX="center"
              anchorY="middle"
            >
              {item}
            </Text>
          ))}
        </group>
      </mesh>
    </Float>
  );
}