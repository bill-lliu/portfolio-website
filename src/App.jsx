/* eslint-disable react/no-unknown-property */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import "./App.css";

// load scene using gltf react component
import Scene from "./components/Scene";

// load scene using gltf model
// const Scene = () => {
//   const gltf = useLoader(GLTFLoader, "./models/cloudStation/scene.gltf");
//   return <primitive object={gltf.scene} />;
// };

// Canvas sets up three.js's scene, camera, and renderer
function App() {
  // view/portal the camera should be at
  const [view, setView] = useState("");

  // reference for camera controls
  const controlsRef = useRef();

  return (
    <>
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [4, -2, 8.5], fov: 30 }}>
          <Suspense fallback={null}>
            <Scene position-y={-2} position-z={1} />
            <CameraControls
              ref={controlsRef}
              minDistance={3}
              maxDistance={10}
              minPolarAngle={Math.PI * (60 / 360)}
              maxPolarAngle={Math.PI * (207 / 360)}
              minAzimuthAngle={Math.PI * (-100 / 360)}
              maxAzimuthAngle={Math.PI * (120 / 360)}
            />
            {/* <ambientLight intensity={0.5} />
            <Environment preset="dawn" background /> */}
          </Suspense>
          {/* <World /> */}
        </Canvas>
      </div>

      {/* <div>
        <p><a href='https://skfb.ly/o6UQQ'>Cloud Station</a> by Alexa Kruckenberg is licensed under <a href='http://creativecommons.org/licenses/by/4.0/'>Creative Commons Attribution</a>.</p>
      </div> */}

      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
