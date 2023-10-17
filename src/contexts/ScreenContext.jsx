import { createContext, useContext, useState } from "react";
import { CameraModes, ScreenPositions } from "./CameraController";

const ScreenContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useScreenContext = () => {
  return useContext(ScreenContext);
};

// eslint-disable-next-line react/prop-types
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
