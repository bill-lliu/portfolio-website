import { createContext, useContext, useState } from "react";

const ScreenContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useScreenContext = () => {
  return useContext(ScreenContext);
};

// Provider stores global states for the app
// eslint-disable-next-line react/prop-types
export const ScreenProvider = ({ children }) => {
  // started state to track first user interaction
  const [started, setStarted] = useState(false);

  // screen state is a screen object
  const Screens = {
    Home: {
      name: "Home",
      position: [8, -4, 20],
      target: [0, 0, 0],
      portal: [0, 100, 0],
    },
    About: {
      name: "About",
      position: [0.4, -0.8, 7.2],
      target: [0.2, -2.2, 3.2],
      portal: [0.2, -2.2, 5],
    },
    Resume: {
      name: "Resume",
      position: [-4, 4.2, 2],
      target: [-4, 4.2, -4],
      portal: [-4, 4.2, -2],
    },
    // Experience: {
    //   name: "Experience",
    //  position: [0, 10, 1],
    //  target: [0, 10, 0],
    //  portal: [0, 10, 1],
    // },
    // Projects: {
    //   name: "Projects",
    //   position: [0, 10, 1],
    //   target: [0, 10, 0],
    //   portal: [0, 10, 1],
    // },
    Timeline: {
      name: "Timeline",
      position: [0, 10, 1],
      target: [0, 10, 0],
      portal: [0, 100, 1],
    },
    Services: {
      name: "Services",
      position: [0, 10, 1],
      target: [0, 10, 0],
      portal: [0, 100, 1],
    },
    Contact: {
      name: "Contact",
      position: [2.8, 3.4, -2],
      target: [2.8, 4.2, -8],
      portal: [2.8, 4.2, -6.5],
    },
    // Socials: {
    //   name: "Socials",
    //   position: [0, 10, 1],
    //   target: [0, 10, 0],
    //   portal: [0, 10, 1],
    // },
    Credits: {
      name: "Credits",
      position: [9, 0, 30],
      target: [0, 0, 0],
      portal: [-2, 6, -10],
    },
  };
  const [currentScreen, setCurrentScreen] = useState(Screens.Home);

  // camera state is a string
  const CameraModes = {
    FREE: "FREE",
    LIMITED: "LIMITED",
    LOCKED: "LOCKED",
  };
  const [currentCameraMode, setCurrentCameraMode] = useState(CameraModes.FREE);

  // audio state is a boolean
  const [playAudio, setPlayAudio] = useState(true);
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

  // useEffect(() => {
  //   console.log("started: ", started);
  // }, []);
  // document.body.addEventListener("click", () => {
  //   console.log("started: ", started);
  // });

  return (
    <ScreenContext.Provider
      value={{
        started,
        setStarted,
        Screens,
        currentScreen,
        setCurrentScreen,
        CameraModes,
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
