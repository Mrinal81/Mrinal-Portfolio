import { Suspense } from "react"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';



export const Earth = () => {
    const earth = useGLTF('../../../public/planet/scene.gltf');

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      // rotation-y={0}
      // castShadow
      // receiveShadow
    />
  )
}

export const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        position: [-4, 3, 6], 
        fov: 45, 
        near: 0.1, 
        far: 200 
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* <ambientLight intensity={0.5} /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}