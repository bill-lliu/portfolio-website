/* eslint-disable react/no-unknown-property */
import { Float, RoundedBox, Sparkles, Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { useScreenContext } from "../../contexts/ScreenContext";

// each portal is a clickable square to jump the camera to that screen
// eslint-disable-next-line react/prop-types
const Portal = ({ view }) => {
  const { Screens, setCurrentScreen } = useScreenContext();
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group>
      <Float
        speed={0.5}
        rotationIntensity={0.5} // XYZ rotation
        floatingRange={[-0.1, 0.1]}
      >
        <group
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          //   onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
          //   onPointerOut={(e) => setHovered(false)}
        >
          <RoundedBox
            key={view}
            position={Screens[view].portal}
            // rotation={[Math.PI / 2, 0, 0]}
            // args={[1.5, 1.5, 0.3]}
            args={[2.5, 2.5, 0.3]}
            radius={hovered ? 0.3 : 0.15}
            onClick={() => {
              console.log(view);
              setCurrentScreen(Screens[view]);
            }}
          >
            <meshBasicMaterial
              color={hovered ? "#D5C29E" : "#F2EFBD"}
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
              color={hovered ? "#3D0773" : "#800080"}
            >
              {view}
            </Text>
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

export default Portal;
