import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { useScreenContext } from "../contexts/ScreenContext";
import Scene from "./Scene";

const Experience = () => {
  const { screen, setScreen, cameraMode, setCameraMode } = useScreenContext();

  // reference used for position and view target of the camera
  const cameraControlsRef = useRef();
  // [x = left/right, y = up/down, z = front/back]
  // const [position, setPosition] = useState([6, -4, 20]); // default camera position
  // const [target, setTarget] = useState([0, 0, 0]); // default camera target
  // const scene = useThree((state) => state.scene);

  // [x_pos, y_pos, z_pos, x_target, y_target, z_target]
  const [currentScreen, setCurrentScreen] = useState({
    position: [6, -4, 20],
    target: [0, 0, 0],
  });

  useEffect(() => {
    console.log(screen);

    const changeView = async () => {
      await cameraControlsRef.current.dollyTo(30, true);
      await cameraControlsRef.current.setLookAt(
        screen.position[0],
        screen.position[1],
        screen.position[2],
        screen.target[0],
        screen.target[1],
        screen.target[2],
        true
      );
      // cameraControlsRef.current.update();
    };
    changeView();
  }, [screen]);

  const Loading = () => {
    return <p>loading...</p>;
  };
  // Canvas used to set up three.js's scene, camera, and renderer
  return (
    <Canvas shadows camera={{ position: [6, 0, 20], fov: 30 }}>
      <Suspense fallback={null}>
        <Scene position-x={0} position-y={-4} position-z={2} />
        <CameraControls
          ref={cameraControlsRef}
          truckSpeed={0} // disables three dimentional movement from right click + drag
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
