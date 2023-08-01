import { useFrame } from "@react-three/fiber";
import {React,useRef,useEffect} from "react";
export default function Ring (props){
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
        <ringGeometry args={[ 1, 0.4,10]}/>
        <meshStandardMaterial color='aliceblue' side='double'/>
    </mesh>
)
}