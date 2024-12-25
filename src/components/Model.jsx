import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import { useRef, useState } from "react";

import * as THREE from 'three';

const Model = () => {

    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        title: 'Iphone 15 pro in Natural Titanium',
        color: ['#8f8a81', '#ffe789', '#6f6c64'],
        img: yellowImg
    });

    //cmaera control for view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    const samll = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    useGSAP(() => {
        gsap.to('#heading', {y: 0, opacity: 1})
    })

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">
                    Take a closer look
                </h1>
            </div>

            <div className="flex flex-4 items-center mt-5">
                <div className="w-full h-[75vh] md:h-[50vh] overflow-hidden relative">
                    <ModelView 
                        index={1}
                        groupRef={small}
                        gsapType="view1"
                        controlRef={cameraControlSmall}
                        setRotationState={setSmallRotation}
                        item={model}
                        size={size}
                        
                    />
                </div>
            </div>
        </section>
    )
}

export default Model