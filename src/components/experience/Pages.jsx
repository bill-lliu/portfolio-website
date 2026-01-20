/* eslint-disable react/no-unknown-property */
import { Float, RoundedBox, Sparkles, Text } from "@react-three/drei";
import * as THREE from "three";
import { useScreenContext } from "../../contexts/ScreenContext";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Credits from "../screens/Credits";
import Projects from "../screens/Projects";
import Resume from "../screens/Resume";

// each page is a panel model for displaying html
// eslint-disable-next-line react/prop-types
const Page = ({ view, children }) => {
  const { Screens, setCurrentScreen } = useScreenContext();

  return (
    <group>
      <Float
        speed={0.5}
        rotationIntensity={0.5} // XYZ rotation
        floatingRange={[-0.1, 0.1]}
      >
        <group>
          <RoundedBox
            key={view}
            position={Screens[view].portal}
            // rotation={[Math.PI / 2, 0, 0]}
            // args={[1.5, 1.5, 0.3]}
            args={[2.4, 1.3, 0.3]}
            radius={0.15}
            onClick={() => {
              console.log(view);
              setCurrentScreen(Screens[view]);
            }}
          >
            <meshBasicMaterial
              color={"#F2EFBD"}
              transparent
              opacity={0.4}
              side={THREE.DoubleSide}
            />
            <Text
              position={[0, 0, 0.151]}
              // position={[0, 0.151, 0]}
              // rotation={[-Math.PI / 2, 0, 0]}
              maxWidth={3}
              fontSize={0.6}
              font={"./fonts/Cabin_Sketch/CabinSketch-Bold.ttf"}
              color={"#800080"}
            >
              {view}
            </Text>
            {children}
            {/* <Html position={[0, 0, 0.01]} transform occlude>
              <div onPointerDown={(e) => e.stopPropagation()}>{view}</div>
            </Html> */}
          </RoundedBox>
        </group>
      </Float>
      <Sparkles
        position={Screens[view].portal}
        count={18}
        scale={6}
        size={24}
        speed={0.6}
      />
    </group>
  );
};

const Pages = () => {
  const { Screens, currentScreen } = useScreenContext();

  // returns page model, with our current page's html from their file
  return (
    <>
      {/* home page has no model, only html, which will be rendered by Overlay.jsx */}
      {currentScreen.name == "Home" ? null : null}
      {currentScreen.name == "About" ? (
        <Page>
          <About />
        </Page>
      ) : null}
      {currentScreen.name == "Resume" ? (
        <Page>
          <Resume />
        </Page>
      ) : null}
      {currentScreen.name == "Projects" ? (
        <Page>
          <Projects />
        </Page>
      ) : null}
      {currentScreen.name == "Contact" ? (
        <Page>
          <Contact />
        </Page>
      ) : null}
      {currentScreen.name == "Credits" ? (
        <Page>
          <Credits />
        </Page>
      ) : null}
      {/* {currentScreen.name == "Home" ? (
          <group>
            {Object.keys(Screens).map((view) => (
              <Page key={view} view={view} />
            ))}
          </group>
        ) : null} */}
    </>
  );
};

export default Pages;
