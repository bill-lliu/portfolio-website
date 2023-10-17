import { createContext, useContext, useState } from "react";
import { CameraModes, ScreenPositions } from "./CameraController";

const ScreenContext = createContext({});

export const useScreenContext = () => {
  return useContext(ScreenContext);
};

export const ScreenProvider = ({ children }) => {
  // state is a screen object
  const [currentScreen, setCurrentScreen] = useState(ScreenPositions.Home);
  // state is a string
  const [currentCameraMode, setCurrentCameraMode] = useState(CameraModes.FREE);

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
