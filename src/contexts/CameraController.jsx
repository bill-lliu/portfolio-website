import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useScreenContext } from "./ScreenContext";

export const ScreenPositions = {
  Home: {
    name: "Home",
    position: [6, 0, 20],
    target: [0, 0, 0],
  },
  About: {
    name: "About",
    position: [1.2, -1.4, 7.6],
    target: [0.2, -2.2, 3],
  },
  Resume: {
    name: "Resume",
    position: [-4, 4.2, 2],
    target: [-4, 4.2, -4],
  },
  // Experience: "Experience",
  Timeline: "Timeline",
  Projects: "Projects",
  Services: "Services",
  Contact: {
    name: "Contact",
    position: [2.8, 3.4, -2],
    target: [2.8, 4.2, -8],
  },
  // Socials: "Socials",
  Credits: {
    name: "Credits",
    position: [6, 0, 20],
    target: [0, 0, 0],
  },
};

export const CameraModes = {
  FREE: "FREE",
  LIMITED: "LIMITED",
  LOCKED: "LOCKED",
};

export const CameraController = () => {
  // reference used for position and view target of the camera
  const cameraControlsRef = useRef();

  const { currentScreen } = useScreenContext();

  //   useFrame(async (state, delta) => {
  //     console.log("State:", state);
  //     console.log("Delta:", delta);
  //   });

  // console.log("cameraControlsRef: ", cameraControlsRef);
  useFrame(() => {
    if (window.innerWidth < 768) {
      cameraControlsRef.current.zoomTo(0.7, true);
    } else {
      cameraControlsRef.current.zoomTo(1, true);
    }
  });

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
    };
    changeView();
  }, [currentScreen]);

  //   useEffect(() => {
  //     if (currentCameraMode != CameraModes.FREE) {
  //       cameraControlsRef.current.enabled = false;
  //     } else {
  //       cameraControlsRef.current.enabled = true;
  //     }
  //   }, [currentCameraMode]);

  return (
    <CameraControls
      ref={cameraControlsRef}
      //   truckSpeed={0} // disables three dimentional movement from right click + drag
      minDistance={12}
      maxDistance={40}
      minPolarAngle={Math.PI * (80 / 360)}
      maxPolarAngle={Math.PI * (205 / 360)}
      // minAzimuthAngle={Math.PI * (-100 / 360)}
      // maxAzimuthAngle={Math.PI * (120 / 360)}
    />
  );
};

export default CameraController;
