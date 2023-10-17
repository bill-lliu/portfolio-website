import { Loader, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraController from "../contexts/CameraController";
import Scene from "./models/Scene";

const Experience = () => {
  // Canvas used to set up three.js's scene, camera, and renderer
  return (
    <>
      <Canvas shadows camera={{ position: [6, 0, 20], fov: 30, near: 1.2 }}>
        <CameraController />
        <Suspense fallback={null}>
          <Scene position-x={0} position-y={-4} position-z={2} />
          {/* <Environment preset="dawn" background> */}
          {/* <ambientLight intensity={0.5} /> */}
          {/* eslint-disable-next-line react/no-unknown-property */}
          <fog attach="fog" args={["#D390F2", 15, 75]} />
          <Sky sunPosition={[0, 50, -100]} />
          <Stars radius={50} depth={50} count={1000} factor={10} speed={3} />
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{ background: "#A885F2" }} // Flex layout styles
        innerStyles={{ width: "40vw", height: "1vh", borderRadius: "1vh" }} // Inner container styles
        barStyles={{
          background: "#F2EFBD",
          width: "40vw",
          height: "1vh",
          borderRadius: "1vh",
        }} // Loading-bar styles
        dataStyles={{
          color: "#F2EFBD",
          fontSize: "2em",
          fontFamily: "Balsamiq Sans, sans-serif",
        }} // Text styles
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
        initialState={(active) => active} // Initial black out state
      />
    </>
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
