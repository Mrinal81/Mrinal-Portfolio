import  { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

interface BallProps {
  icon: string; // Assuming icon is a URL/path to the texture
}

interface BallCanvasProps {
  icon: string; // Same as above
}

export const Ball = (props: BallProps) => {
  const [decal] = useTexture([props.icon]);
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal 
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]} 
          map={decal} 
        />
      </mesh>
    </Float>
  )
}

export const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}/>
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

