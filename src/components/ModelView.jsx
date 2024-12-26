import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";

import Lights from "./Lights";
import { Suspense } from "react";
import Iphone from "./Iphone";
import Loader from './Loader'

import * as THREE from 'three';

const ModelView = ( 
    { index, groupRef, gsapStyle, controlRef, setRotationSize, size, item}
) => {
    return (
        <View 
            index={index} 
            id={gsapStyle}
            className={`w-full h-full absolute ${index === 2? 'right-[-100%]' : ''}`}
        
        >
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makedefault position={[0, 0.4]}/>

            <Lights />

            <OrbitControls 
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0,0,0)}
            onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            />
            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0,0,0]}>
                <Suspense fallback={<Html><div><Loader /></div></Html>}>
                    <Iphone 
                    scale={ index === 1 ? [15,15,15] : [17,17,17] }
                    item={item}
                    size={size}/>
                </Suspense>
            </group>

        </View>
    )
}

export default ModelView