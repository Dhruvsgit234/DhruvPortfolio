import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

export function Bird() {
  const birdRef = useRef();

  // ✅ Load from public folder (make sure bird.glb is inside public/3d/)
  const { scene, animations } = useGLTF("/3d/bird.glb");
  const { actions } = useAnimations(animations, birdRef);

  // Play the "Take 001" animation once loaded
  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  // Animate bird’s flight path
  useFrame(({ clock, camera }) => {
    const bird = birdRef.current;
    if (!bird) return;

    // Hover motion
    bird.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Change direction based on camera
    if (bird.position.x > camera.position.x + 10) {
      bird.rotation.y = Math.PI;
    } else if (bird.position.x < camera.position.x - 10) {
      bird.rotation.y = 0;
    }

    // Move forward or backward
    if (bird.rotation.y === 0) {
      bird.position.x += 0.01;
      bird.position.z -= 0.01;
    } else {
      bird.position.x -= 0.01;
      bird.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}

// ✅ Preload the model (optional but recommended for faster load)
useGLTF.preload("/3d/bird.glb");


