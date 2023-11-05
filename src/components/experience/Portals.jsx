/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useScreenContext } from "../../contexts/ScreenContext";
import Portal from "./Portal";

const Portals = () => {
  const { Screens, currentScreen } = useScreenContext();

  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);
  // console.log("currentScreen: ", currentScreen);

  // return all portals
  return (
    <>
      {currentScreen.name == "Home" ? (
        <group>
          {Object.keys(Screens).map((view) => (
            <Portal
              key={view}
              view={view}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </group>
      ) : null}
    </>
  );
};

export default Portals;
