import { useFrame } from "@react-three/fiber";
import React, { useState,useRef, useEffect } from "react";
export default function Box(props){
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const meshRef = useRef()//ссылка на обьект крч мы получем его полностью 
    //и теперь мы вращем его
    useFrame((state,delta )=>{meshRef.current.rotation.x+=delta
    meshRef.current.rotation.y+=delta})
    useEffect(()=>{
        console.log(meshRef)
    })
    
    return(
        <mesh 
        {...props}
        ref={meshRef}
        scale={active ? 1.2 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color={hovered ? 'aliceblue' : 'black'} />
        </mesh>
        
    )
}