"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";

export default function Scene({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0D9488" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} color="#F97316" />

      <Suspense fallback={null}>
        {children}
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
