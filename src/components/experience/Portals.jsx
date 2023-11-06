/* eslint-disable react/no-unknown-property */
import { useScreenContext } from "../../contexts/ScreenContext";
import Portal from "./Portal";

const Portals = () => {
  const { Screens, currentScreen } = useScreenContext();

  // return all portals
  return (
    <>
      {currentScreen.name == "Home" ? (
        <group>
          {Object.keys(Screens).map((view) => (
            <Portal key={view} view={view} />
          ))}
        </group>
      ) : null}
    </>
  );
};

export default Portals;
