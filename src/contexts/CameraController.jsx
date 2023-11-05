import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useScreenContext } from "./ScreenContext";

export const CameraController = () => {
  // reference used for position and view target of the camera
  const cameraControlsRef = useRef();
  const { currentScreen } = useScreenContext();

  const woosh = new Audio("./audio/woosh.mp3");

  //   useFrame(async (state, delta) => {
  //     console.log("State:", state);
  //     console.log("Delta:", delta);
  //   });
  // console.log("cameraControlsRef: ", cameraControlsRef);

  // resize camera zoom on window resize
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
      woosh.play();
      await cameraControlsRef.current.dollyTo(21, true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScreen]);

  return (
    <CameraControls
      ref={cameraControlsRef}
      //   truckSpeed={0} // disables three dimentional movement from right click + drag
      minDistance={12}
      maxDistance={40}
      minPolarAngle={Math.PI * (80 / 360)}
      maxPolarAngle={Math.PI * (235 / 360)}
      // minAzimuthAngle={Math.PI * (-100 / 360)}
      // maxAzimuthAngle={Math.PI * (120 / 360)}
    />
  );
};

export default CameraController;
