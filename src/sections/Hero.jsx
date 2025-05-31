import React, { Suspense } from "react";
import { PerspectiveCamera, ContactShadows } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Canvas } from "@react-three/fiber";
import { Robot } from "../components/Robot.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constans/index.js";

const Hero = () => {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isTablet, isMobile);



    return (
        <section className="bg-[#f5f4fb] pt-15 px-8 font-[hero]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-start gap-12">
                {/* Left Text */}
                <div className="pt-4">
                    <p className="text-gray-500 text-sm mb-2">
                        <span className="inline-block w-10 h-[2px] bg-gray-400 mr-2 align-middle"></span>
                        Marina Budarina
                    </p>
                    <h1 className="text-5xl md:text-7xl font-medium leading-tight text-gray-900">
                        Hey & Welcome.<br />
                        Spline to Framer<br />
                        tutorial here <span className="inline-block">✨</span>
                    </h1>
                    <button className="mt-15 px-6 py-3 rounded-full bg-pink-600 text-white shadow-md hover:bg-pink-700 transition">
                        Start learning
                    </button>
                </div>

                {/* Right Shape */}
                <div className="w-full h-full absolute inset-0">
                    {/*<Leva />*/}
                    <Canvas
                        className="w-full h-full"
                        shadows
                        camera={{ position: [0, 2, 5], fov: 50 }}
                    >
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                            {/* Robot */}
                            <Robot
                                scale={sizes.robotscale}
                                position={sizes.robotposition}
                                rotation={sizes.robotrotation}
                            />

                            {/* Lighting */}
                            <ambientLight intensity={2} />
                            <directionalLight
                                castShadow
                                position={[10, 10, 10]}
                                intensity={1.5}
                                shadow-mapSize-width={2048}
                                shadow-mapSize-height={2048}
                                shadow-camera-far={50}
                                shadow-camera-left={-15}
                                shadow-camera-right={15}
                                shadow-camera-top={15}
                                shadow-camera-bottom={-15}
                            />

                            {/* Contact Shadow */}
                            <ContactShadows
                                position={[12.4, -5.7, 4.7]} // disesuaikan agar sejajar dengan kaki robot
                                opacity={1}
                                scale={20}
                                blur={2.5}
                                far={40}
                                resolution={2048}
                                color="#000000"
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Hero;
