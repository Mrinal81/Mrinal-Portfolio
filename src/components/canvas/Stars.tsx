// import { useRef, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Points, PointMaterial, Preload } from '@react-three/drei';
// import * as random from 'maath/random/dist/maath-random.esm';
// import { BufferGeometry, Material, Points as ThreePoints } from 'three';

// interface StarsProps {
//   color?: string;
//   size?: number;
// }

// export const Stars = (props: StarsProps) => {
//   const ref = useRef<ThreePoints<BufferGeometry, Material | Material[]>>(null);
//   const sphere = Float32Array.from(
//     random.inSphere(new Float32Array(5000), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled>
//         <PointMaterial
//           transparent
//           color="#f272c8"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// export const StarsCanvas = () => {
//   return (
//     <div className="w-full h-auto absolute inset-0 z-[-1]">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//           <Preload all />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };






import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { BufferGeometry, Material, Points as ThreePoints } from 'three';

interface StarsProps {
  color?: string;
  size?: number;
}

export const Stars = ({ color = '#f272c8', size = 0.002 }: StarsProps) => {
  const ref = useRef<ThreePoints<BufferGeometry, Material | Material[]>>(null);
  const sphere = Float32Array.from(
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};