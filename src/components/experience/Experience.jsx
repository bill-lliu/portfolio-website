import { PositionalAudio, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CameraController from "../../contexts/CameraController";
import { useScreenContext } from "../../contexts/ScreenContext";
import LoadingScreen from "../overlay/LoadingScreen";
import Clouds from "./Clouds";
import Portals from "./Portals";
import Scene from "./Scene";

const Experience = () => {
  const { started } = useScreenContext();

  // Canvas used to set up three.js's scene, camera, and renderer
  return (
    <>
      <Canvas shadows camera={{ position: [6, 0, 20], fov: 30, near: 2 }}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <group position={[-4, 4.2, -4]}>
          {started && (
            <PositionalAudio
              url="./audio/bgm.mp3"
              autoplay
              loop
              setVolume={0.3}
              distance={20}
            />
          )}
        </group>
        <CameraController />
        {/* <Grid cellSize={1} infiniteGrid={true} />
        <Box args={[1, 1, 1]} position={[1, 2, 2]} />
        <Box args={[1, 1, 1]} position={[2, 0.4, -2]} material-color="red" /> */}
        <Suspense fallback={null}>
          <Scene position-x={0} position-y={-4} position-z={2} />
          {/* <Clouds /> */}
          <Clouds />
          <Portals />
          {/* <Environment preset="dawn" background> */}
          {/* <ambientLight intensity={0.5} /> */}
          {/* eslint-disable-next-line react/no-unknown-property */}
          <fog attach="fog" args={["#D390F2", 20, 100]} />
          <Sky sunPosition={[0, 50, -100]} />
          <Stars radius={50} depth={50} count={1000} factor={10} speed={3} />
        </Suspense>
      </Canvas>
      <LoadingScreen />
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
