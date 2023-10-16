import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useScreenContext } from "./ScreenContext";

const CameraController = () => {
  // reference used for position and view target of the camera
  const cameraControlsRef = useRef();

  const { currentScreen, setCurrentScreen, cameraMode, setCameraMode } =
    useScreenContext();

  useEffect(() => {
    // async function to force animation finish
    const changeView = async () => {
      await cameraControlsRef.current.dollyTo(20, true);
      await cameraControlsRef.current.setLookAt(
        currentScreen.position[0],
        currentScreen.position[1],
        currentScreen.position[2],
        currentScreen.target[0],
        currentScreen.target[1],
        currentScreen.target[2],
        true
      );
      // cameraControlsRef.current.update();
    };
    changeView();
  }, [currentScreen]);

  return (
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
  );
};

export default CameraController;
