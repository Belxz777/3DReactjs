import React from 'react'
import { Link } from 'react-router-dom'
import {Canvas} from '@react-three/fiber'
import Box from './Box';
import  './Main.css'
export default function Main() {
  return (
    <div>
        <header>
        <li style={ {display:'flex',textAlign:'center',alignItems:'center'}} className='main'>
        <ul className='links' style={{display:"flex",textDecoration:'none',textAlign:'center'}}>
        <Link to='/texture' className='links'>  На страницу текстур и главных тестов </Link> 
        </ul>
        <ul className='links'>
        <Link to='/shapes' className='links'>  На страницу фигур и моделей  </Link> 
        </ul>
        <ul className='links'>
        <Link to='/shapes' className='links'>Другие тесты и прочее </Link> 
        </ul>
     </li>
        </header>
        <div>
        <Canvas
  camera={{ position: [2, 0, 12.25], fov: 15 }}
  className ='newCan'
>
<ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-0.5,-0.2,0]}  style={{innerWidth:40,innerHeight:40}} width='20' />
    </Canvas>
        </div>
     <footer className="container">
<h2 style={{textAlign:'center',marginTop:30,color:'darkorchid' }}>Created by &copy; Belxz888</h2>
        </footer>
    </div>
  )
}
