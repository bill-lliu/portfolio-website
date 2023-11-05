import { useScreenContext } from "../contexts/ScreenContext";
import Navbar from "./Navbar";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Credits from "./screens/Credits";
import Home from "./screens/Home";
import Resume from "./screens/Resume";

const Overlay = () => {
  const { started, currentScreen } = useScreenContext();

  // main content of the overlay component
  return (
    <>
      {started ? (
        <>
          <Navbar zIndex={3} />
          <div style={{ zIndex: 2 }}>
            {currentScreen.name == "Home" ? <Home /> : null}
            {currentScreen.name == "About" ? <About /> : null}
            {currentScreen.name == "Resume" ? <Resume /> : null}
            {currentScreen.name == "Contact" ? <Contact /> : null}
            {currentScreen.name == "Credits" ? <Credits /> : null}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Overlay;
