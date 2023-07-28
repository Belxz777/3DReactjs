import { useFrame } from "@react-three/fiber";
import {React,useRef,useEffect} from "react";
export default function Cone (props){
    const capmesh = useRef()
    useFrame((state,delta )=>{capmesh.current.rotation.x+=delta
       capmesh.current.rotation.y+=delta})
    useEffect(()=>{
        console.log(capmesh)
    })
return (
    <mesh {...props}
    ref={capmesh}>
        <ambientLight/>
        <coneGeometry args={[ 0.2, 0.2,4,6]}/>
        <meshStandardMaterial color='yellow'/>
    </mesh>
)
}