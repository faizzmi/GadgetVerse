import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {

    const videoRef = useRef();

    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottotm'
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })

        animateWithGsap('#features_title', { y: 0, opacity : 1 });
        animateWithGsap('.g_grow', {scale : 1, opacity: 1, ease: 'power1'},{ scrub: 5.5});
        animateWithGsap('.g_text', {y: 0, opacity: 1, ease: 'power2.inOut', duration: 1})
    }, [])

    return (
        <section className="h-full common-padding bg-zinc relative overflow-hidden">
            <div className="max-screen-width">
                <div className="mb-12 w-full h1 section-heading" id="features_title">
                    Explore the full story.
                </div>
            </div>

            <div className="flex flex-col justify-center items-center overflow-hidden">
                <div className="mt-32 mb-24 pl-24">
                    <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
                    <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
                </div>

                <div className="flex-center flex-col sm:px-10">
                    <div className="relative h-[50vh] w-full flex items-center">
                        <video playsInline ref={videoRef} id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" autoplay muted >
                            <source src={exploreVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="flex flex-col w-col relative">
                        <div className="feature-video-container">
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                            </div>
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                            </div>
                        </div>
                        
                        
                        <div className="feature-text-container">
                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text">
                                    Iphone 15 pro is {' '}
                                    <span className="text-white">
                                        the first iPhone to feature na aerospace-grade titanium design
                                    </span>,
                                    using the same alloy that spacecraft use for missions to Mars.
                                </p>
                            </div>
                        </div>

                        
                        <div className="feature-text-container">
                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text">
                                    Titanium has one of the best strength-to-weight ratio of any metal, making these our {' '}
                                    <span className="text-white">
                                        lightest Pro models ever.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features