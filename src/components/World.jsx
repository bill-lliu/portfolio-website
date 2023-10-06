import { OrbitControls } from "@react-three/drei";

const World = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

// three.js equivalent:

// const scene = new THREE.Scene()
// const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(width, height)
// document.querySelector('#canvas-container').appendChild(renderer.domElement)

// const mesh = new THREE.Mesh()
// mesh.geometry = new THREE.BoxGeometry()
// mesh.material = new THREE.MeshStandardMaterial()

// scene.add(mesh)

// function animate() {
//   requestAnimationFrame(animate)
//   renderer.render(scene, camera)
// }

// animate()

export default World;
