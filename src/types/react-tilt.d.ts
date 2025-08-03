declare module 'react-tilt' {
  import { ComponentType, HTMLAttributes } from 'react';
  
  interface TiltOptions {
    max?: number;
    scale?: number;
    speed?: number;
  }
  
  interface TiltProps extends HTMLAttributes<HTMLDivElement> {
    options?: TiltOptions;
  }
  
  const Tilt: ComponentType<TiltProps>;
  export default Tilt;
}