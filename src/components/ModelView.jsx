import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";

import Lights from "./Lights";
import { Suspense } from "react";
import Iphone from "./Iphone";

const ModelView = ( 
    { index, groupRef, gsapStyle, controlRef, setRotationSize, size, item}
) => {
    return (
        <View 
            index={index} 
            id={gsapStyle}
            className={`border-2 border-red-500 w-full h-full ${index === 2}? 'right-[-100%] : ''`}
        
        >
            <ambientLight intensity={0.3} />

            <PerspectiveCamera makedefault position={[0, 0.4]}/>

            <Lights />

            <Suspense fallback={<Html><div>Loading</div></Html>}>
                <Iphone />
            </Suspense>

        </View>
    )
}

export default ModelView