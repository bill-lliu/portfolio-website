import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraController from "../contexts/CameraController";
import { useScreenContext } from "../contexts/ScreenContext";
import Scene from "./models/Scene";

const Experience = () => {
  const {
    currentScreen,
    setCurrentScreen,
    currentCameraMode,
    setCurrentCameraMode,
  } = useScreenContext();

  const Loading = () => {
    return <p>loading...</p>;
  };
  // Canvas used to set up three.js's scene, camera, and renderer
  return (
    <Canvas shadows camera={{ position: [6, 0, 20], fov: 30, near: 1.2 }}>
      <CameraController />
      <Suspense fallback={null}>
        <Scene position-x={0} position-y={-4} position-z={2} />
        <fog attach="fog" args={["#D390F2", 15, 75]} />
        {/* <ambientLight intensity={0.5} /> */}
        {/* <Environment preset="dawn" background /> */}
      </Suspense>
    </Canvas>
  );
};

export default Experience;

// load scene using gltf model instead of jsx primitives
// const Scene = () => {
//   const gltf = useLoader(GLTFLoader, "./models/cloudStation/scene.gltf");
//   return <primitive object={gltf.scene} />;
// };

// optional props validation
// import PropTypes from "prop-types";
// Experience.propTypes = {
//   screen: PropTypes.string,
//   setScreen: PropTypes.func,
// };
