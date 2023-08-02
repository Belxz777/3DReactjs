import React from 'react'
import { Canvas, useLoader } from "@react-three/fiber";
import { DoubleSide,TextureLoader } from 'three';
import './Textures.css'
import texture from './imgs/texture.jpg'
import  Model  from './Scene';
import { OrbitControls,useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
 
export default function Textures() {
 
    const textureMap = useLoader(TextureLoader,texture);

  return (
      <Canvas
        camera={{
          fov: 90,
          position: [0, 0, 3],
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        {/* ! */}
        <OrbitControls />
        <Suspense fallback={null}>
          <ambientLight />
        <Model  rotation={[0, Math.PI * 1.25, 0]}/>
        </Suspense>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial map={textureMap} side={DoubleSide} />
        </mesh>
      </Canvas>
  );
}
