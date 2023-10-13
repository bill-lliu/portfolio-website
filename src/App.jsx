/* eslint-disable react/no-unknown-property */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience";
import Interface from "./components/Interface";

function App() {
  // state for what "page" the user is on
  const [view, setView] = useState(null);

  // Canvas sets up three.js's scene, camera, and renderer
  return (
    <>
      <div className="canvas-container">
        <Interface />
        <Canvas shadows camera={{ position: [6, -4, 20], fov: 30 }}>
          <Experience view={view} setView={setView} />
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
