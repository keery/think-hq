import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import CameraAnimation from "./CameraAnimation";
import Lights from "./Lights";
import Scene from "./Scene";

const ThreeDCanvas = () => {
  return (
    <div className="h-96 w-full md:h-[41.563rem]">
      <Canvas
        camera={{
          position: [-2000, 500, 2],
          fov: 90,
          far: 3000,
          near: 1,
        }}
      >
        <Suspense fallback="Loading">
          <color attach="background" args={[0, 0, 0]} />
          <Lights />
          <OrbitControls />
          <CameraAnimation />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDCanvas;
