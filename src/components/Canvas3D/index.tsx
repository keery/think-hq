import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import CameraAnimation from "./CameraAnimation";
import Lights from "./Lights";
import Loader from "./Loader";
import Scene from "./Scene";

const Canvas3D = () => {
  return (
    <div className="relative h-96 w-full md:h-[41.563rem]">
      <Loader />
      <Canvas
        camera={{
          position: [-2000, 500, 2],
          fov: 90,
          far: 3000,
          near: 1,
        }}
      >
        <color attach="background" args={[0, 0, 0]} />
        <Lights />
        <OrbitControls />
        <CameraAnimation />
        <Scene />
      </Canvas>
    </div>
  );
};

export default Canvas3D;
