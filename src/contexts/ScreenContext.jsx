import { createContext, useContext, useState } from "react";

export const ScreenViews = {
  home: "home",
  about: "about",
  projects: "projects",
  contact: "contact",
};

export const CameraModes = {
  free: "free",
  locked: "locked",
};

const ScreenContext = createContext({});

export const useScreenContext = () => {
  return useContext(ScreenContext);
};

export const ScreenProvider = ({ children }) => {
  const [screen, setScreen] = useState(ScreenViews.home);
  const [cameraMode, setCameraMode] = useState(CameraModes.free);

  return (
    <ScreenContext.Provider
      value={{
        screen,
        setScreen,
        cameraMode,
        setCameraMode,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
