import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useScreenContext } from "./ScreenContext";

export const ScreenPositions = {
  Home: { name: "Home", position: [6, -4, 20], target: [0, 0, 0] },
  About: { name: "About", position: [1.2, -1.4, 7.6], target: [0, -2.4, 2] },
  // Timeline: "Timeline",
  // Experience: "Experience",
  Projects: { name: "Projects", position: [-4, 4, 2], target: [-4, 4, -4] },
  // Resume: "Resume",
  // Services: "Services",
  Contact: {
    name: "Contact",
    position: [2.8, 3.4, -2],
    target: [2.8, 4.4, -8],
  },
  // Socials: "Socials",
};

export const CameraModes = {
  free: "free",
  locked: "locked",
};

export const CameraController = () => {
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
