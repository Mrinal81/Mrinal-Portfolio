// TestCanvas.tsx
import { Canvas } from '@react-three/fiber'

export const TestCanvas = () => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </Canvas>
  </div>
)