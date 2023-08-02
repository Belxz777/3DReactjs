import React from 'react'
import {Canvas} from '@react-three/fiber'
import Capsule from './Capsule';
import Cone from './Cone';
import DraggableDodecahedron from './Torus';
export default function Shapes() {
  return (
<Canvas
  camera={{ position: [2, 0, 12.25], fov: 15 }}
  className ='canvasMain'
>
<ambientLight />
    <pointLight position={[10, 10, 10]} />
  <Capsule position = {[-1.4,1.3,0]} />
  <Cone position = {[-0.6,1.3,0]}/>
<DraggableDodecahedron position = {[1,-1,0]} style={{innerWidth:20,innerHeight:20}}/>
</Canvas>
  )
}
