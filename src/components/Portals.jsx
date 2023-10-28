/* eslint-disable react/no-unknown-property */
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useScreenContext } from "../contexts/ScreenContext";

const Portals = () => {
  const { Screens } = useScreenContext();
  const { viewport } = useThree();

  // each portal is a clickable square to jump the camera to that screen
  // eslint-disable-next-line react/prop-types
  const Portal = ({ view }) => {
    return (
      <group>
        <mesh
          key={view}
          position={Screens[view].portal}
          onClick={() => console.log(view)}
        >
          <planeGeometry args={[3, 3]} />
          <meshBasicMaterial color="cyan" transparent opacity={0.4} />
        </mesh>
      </group>
    );
  };

  // return all portals
  return (
    <group>
      {Object.keys(Screens).map((view) => (
        <motion.group key={view}>
          <Portal view={view} />
        </motion.group>
      ))}
    </group>
  );
};

export default Portals;
