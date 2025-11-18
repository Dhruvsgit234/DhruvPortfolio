import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// ✅ FIX: load from public folder instead of /src/assets
// Make sure sky.glb is located in public/3d/sky.glb
const SKY_MODEL_PATH = "/3d/sky.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Sky({ isRotating }) {
  const skyRef = useRef();

  // Load the GLTF model from the public folder
  const { scene } = useGLTF(SKY_MODEL_PATH);

  // Rotate the sky model smoothly based on frame updates
  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust rotation speed if needed
    }
  });

  return (
    <mesh ref={skyRef}>
      {/* Directly embed the loaded 3D scene */}
      <primitive object={scene} />
    </mesh>
  );
}

// ✅ Preload model for better performance
useGLTF.preload(SKY_MODEL_PATH);
