import { createContext, useContext, useState } from "react";

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
