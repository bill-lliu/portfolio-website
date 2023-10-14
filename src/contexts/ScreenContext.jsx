import { createContext, useContext, useState } from "react";

export const ScreenViews = {
  Home: { position: [6, -4, 20], target: [0, 0, 0] },
  About: { position: [1.2, -1.4, 7.6], target: [0, -2.3, 2] },
  // Timeline: "Timeline",
  // Experience: "Experience",
  Projects: { position: [-4, 4, 2], target: [-4, 4, -10] },
  // Resume: "Resume",
  // Services: "Services",
  Contact: { position: [2.8, 3.5, -2], target: [2.8, 4.5, -10] },
  // Socials: "Socials",
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
  const [screen, setScreen] = useState(ScreenViews.Home);
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
