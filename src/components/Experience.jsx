import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { useScreenContext } from "../contexts/ScreenContext";
import Scene from "./Scene";

const Experience = () => {
  const { screen, setScreen, cameraMode, setCameraMode } = useScreenContext();

  // reference used for position and view target of the camera
  const cameraControlsRef = useRef();
  // [x, y, distance]
  const [position, setPosition] = useState([6, -4, 20]); // default camera position
  const [target, setTarget] = useState([0, 0, 0]); // default camera target
  // const scene = useThree((state) => state.scene);

  useEffect(() => {
    const changeView = async () => {
      await cameraControlsRef.current.setLookAt(
        position[0],
        position[1],
        30,
        target[0],
        target[1],
        target[2],
        true
      );
      // cameraControlsRef.current.update();
      await cameraControlsRef.current.setLookAt(
        position[0],
        position[1],
        position[2],
        target[0],
        target[1],
        target[2],
        true
      );
      // cameraControlsRef.current.update();
    };
    changeView();
  }, [screen]);

  // Canvas used to set up three.js's scene, camera, and renderer
  return (
    <Canvas shadows camera={{ position: [6, -4, 20], fov: 30 }}>
      <Suspense fallback={null}>
        <Scene position-x={0} position-y={-4} position-z={2} />
        <CameraControls
          ref={cameraControlsRef}
          minDistance={12}
          maxDistance={40}
          minPolarAngle={Math.PI * (60 / 360)}
          maxPolarAngle={Math.PI * (205 / 360)}
          // minAzimuthAngle={Math.PI * (-100 / 360)}
          // maxAzimuthAngle={Math.PI * (120 / 360)}
        />
        {/* <ambientLight intensity={0.5} />
            <Environment preset="dawn" background /> */}
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
