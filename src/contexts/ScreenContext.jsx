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
  // global boolean to track first user interaction
  const [started, setStarted] = useState(false);
  // screen state is a screen object
  const [currentScreen, setCurrentScreen] = useState(ScreenPositions.Home);
  // camera state is a string
  const [currentCameraMode, setCurrentCameraMode] = useState(CameraModes.FREE);
  // audio state is a boolean
  const [playAudio, setPlayAudio] = useState(true);

  useEffect(() => {
    console.log("started: ", started);
  }, []);
  document.body.addEventListener("click", () => {
    console.log("started: ", started);
  });

  // start playing audio on first user interaction
  // useEffect(() => {
  //   console.log("playAudio change: ", playAudio);
  //   // if (playAudio) {
  //   //   intro.play();
  //   //   intro.addEventListener("ended", () => {
  //   //     loop.play();
  //   //     loop.loop = true;
  //   //   });
  //   // } else {
  //   //   loop.pause();
  //   // }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [playAudio]);

  return (
    <ScreenContext.Provider
      value={{
        started,
        setStarted,
        currentScreen,
        setCurrentScreen,
        currentCameraMode,
        setCurrentCameraMode,
        playAudio,
        setPlayAudio,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
