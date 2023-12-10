/* eslint-disable react/no-unknown-property */
import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";

const Portals = () => {
  // return all portals
  return (
    <>
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud
          segments={60}
          volume={10}
          opacity={0.2}
          fade={10}
          speed={0.1}
          position={[0, -6, 0]}
          bounds={[8, 4, 8]}
          color="white"
        />
        <Cloud
          segments={30}
          volume={10}
          opacity={0.2}
          fade={10}
          speed={0.1}
          position={[0, -6, 0]}
          bounds={[8, 4, 8]}
          color="hotpink"
        />
        <Cloud
          segments={10}
          volume={10}
          opacity={0.2}
          fade={10}
          speed={0.1}
          position={[0, -6, 0]}
          bounds={[4, 2, 4]}
          color="purple"
        />
      </Clouds>
    </>
  );
};

export default Portals;
