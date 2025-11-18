import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// ✅ FIX: load from public folder (make sure plane.glb is inside public/3d/)
const PLANE_MODEL_PATH = "/3d/plane.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane({ isRotating, ...props }) {
  const ref = useRef();

  // Load 3D model and animations from the served public folder path
  const { scene, animations } = useGLTF(PLANE_MODEL_PATH);
  const { actions } = useAnimations(animations, ref);

  // Control animation playback based on `isRotating` state
  useEffect(() => {
    const action = actions["Take 001"];
    if (action) {
      if (isRotating) action.play();
      else action.stop();
    }
  }, [actions, isRotating]);

  return (
    // ✅ `primitive` directly renders the model scene inside the mesh
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
}

// ✅ Preload model for better performance
useGLTF.preload(PLANE_MODEL_PATH);
