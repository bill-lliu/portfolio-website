/* eslint-disable react/no-unknown-property */
import { Float, RoundedBox, Sparkles, Text } from "@react-three/drei";
import * as THREE from "three";
import { useScreenContext } from "../contexts/ScreenContext";

const Portals = () => {
  const { Screens, currentScreen, setCurrentScreen } = useScreenContext();

  // each portal is a clickable square to jump the camera to that screen
  // eslint-disable-next-line react/prop-types
  const Portal = ({ view }) => {
    return (
      <group>
        <Float
          speed={0.5}
          rotationIntensity={0.5} // XYZ rotation intensity
          floatingRange={[-0.1, 0.1]}
        >
          <RoundedBox
            key={view}
            position={Screens[view].portal}
            // rotation={[Math.PI / 2, 0, 0]}
            // args={[1.5, 1.5, 0.3]}
            args={[3, 3, 0.3]}
            radius={0.15}
            onClick={() => {
              console.log(view);
              setCurrentScreen(Screens[view]);
            }}
          >
            <meshBasicMaterial
              color="#F2EFBD"
              side={THREE.DoubleSide}
              transparent
              opacity={0.4}
            />
            <Text
              position={[0, 0, 0.151]}
              // position={[0, 0.151, 0]}
              // rotation={[-Math.PI / 2, 0, 0]}
              maxWidth={3}
              fontSize={0.7}
              font={"./fonts/Cabin_Sketch/CabinSketch-Bold.ttf"}
              color={"purple"}
            >
              {view}
            </Text>
            {/* <Html position={[0, 0, 0.01]} transform occlude>
              <div onPointerDown={(e) => e.stopPropagation()}>{view}</div>
            </Html> */}
          </RoundedBox>
        </Float>
        <Sparkles
          position={Screens[view].portal}
          count={15}
          scale={5}
          size={25}
          speed={0.5}
        />
      </group>
    );
  };

  // console.log("currentScreen: ", currentScreen);

  // return all portals
  return (
    <>
      {currentScreen.name === "Home" && (
        <group>
          {Object.keys(Screens).map((view) => (
            <Portal key={view} view={view} />
          ))}
        </group>
      )}
    </>
  );
};

export default Portals;
