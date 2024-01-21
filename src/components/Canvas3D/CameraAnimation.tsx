import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

// Animate camera around model when canvas is loaded
export default function CameraAnimation() {
  const [isAnimating, setAnimating] = useState<boolean>(false);
  const vec = new Vector3();

  useEffect(() => {
    setAnimating(true);

    const timeoutId = setTimeout(() => {
      setAnimating(false);
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  useFrame(({ camera }) => {
    if (isAnimating) {
      camera.lookAt(0, 0, 2);
      camera.position.lerp(vec.set(300, 200, -400), 0.045);
    }
    return null;
  });

  return null;
}
