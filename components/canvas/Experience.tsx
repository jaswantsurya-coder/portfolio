"use client";

import { Suspense } from "react";
import Scene from "./Scene";
import ScrollModel from "./ScrollModel";

export default function Experience() {
  return (
    <Scene>
      <Suspense fallback={null}>
        <ScrollModel />
      </Suspense>
    </Scene>
  );
}
