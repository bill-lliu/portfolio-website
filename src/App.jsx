import "./App.css";
import Experience from "./components/experience/Experience";
import Overlay from "./components/overlay/Overlay";

function App() {
  // States of the screen, camera, and dark mode offloaded to context provider
  return (
    <div className="canvas-container">
      <Overlay />
      <Experience />
    </div>
  );
}

export default App;

{
  /* 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/images/vite.svg'
<div>
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
</p> */
}
