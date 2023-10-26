import { createContext, useContext, useEffect, useState } from "react";
import { CameraModes, ScreenPositions } from "./CameraController";

const ScreenContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useScreenContext = () => {
  return useContext(ScreenContext);
};

// also stores global states for the website
// eslint-disable-next-line react/prop-types
export const ScreenProvider = ({ children }) => {
  // screen state is a screen object
  const [currentScreen, setCurrentScreen] = useState(ScreenPositions.Home);
  // camera state is a string
  const [currentCameraMode, setCurrentCameraMode] = useState(CameraModes.FREE);
  // audio state is a boolean
  const [playAudio, setPlayAudio] = useState(true);
  const intro = new Audio("./audio/intro.mp3");
  const loop = new Audio("./audio/loop.mp3");

  // useeffect to start playing audio
  useEffect(() => {
    intro.play();
    intro.addEventListener("ended", () => {
      loop.play();
      loop.loop = true;
    });
  }, []);

  // useeffect to toggle audio
  useEffect(() => {
    if (playAudio) {
      loop.play();
      loop.loop = true;
    } else {
      loop.pause();
    }
  }, [playAudio]);

  return (
    <ScreenContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        currentCameraMode,
        setCurrentCameraMode,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
