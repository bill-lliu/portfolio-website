import { createContext, useContext, useState } from "react";
import { CameraModes, ScreenPositions } from "./CameraController";

const ScreenContext = createContext({});

export const useScreenContext = () => {
  return useContext(ScreenContext);
};

export const ScreenProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState(ScreenPositions.Home);
  const [cameraMode, setCameraMode] = useState(CameraModes.free);

  return (
    <ScreenContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        cameraMode,
        setCameraMode,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export default useScreenContext;
