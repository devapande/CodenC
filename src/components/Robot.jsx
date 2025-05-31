import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Robot(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/RocketRobot.glb')
    const { actions, names } = useAnimations(animations, group)

    useEffect(() => {
        const action = actions["metarig|metarigAction"]
        if (action) {
            action.reset().fadeIn(0.5).play()
            return () => action.fadeOut(0.5).stop()
        }
    }, [actions, names])

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Plane untuk shadow */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
                <planeGeometry args={[10, 10]} />
                <shadowMaterial opacity={0.3} />
            </mesh>

            {/* Robot model */}
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
                    <group name="99bb25453ae64b8c9ac16992b24eafaefbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="Sphere"
                                    position={[0, 45.158, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={101.805}
                                />
                                <group
                                    name="metarig"
                                    position={[0, -126.157, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={141.779}
                                >
                                    <group name="Object_6">
                                        {nodes._rootJoint && (
                                            <primitive object={nodes._rootJoint} />
                                        )}
                                        <skinnedMesh
                                            name="Object_9"
                                            geometry={nodes.Object_9.geometry}
                                            material={materials.naranja}
                                            skeleton={nodes.Object_9.skeleton}
                                            castShadow
                                            receiveShadow
                                        />
                                        <skinnedMesh
                                            name="Object_10"
                                            geometry={nodes.Object_10.geometry}
                                            material={materials.naranja}
                                            skeleton={nodes.Object_10.skeleton}
                                            castShadow
                                            receiveShadow
                                        />
                                        <skinnedMesh
                                            name="Object_11"
                                            geometry={nodes.Object_11.geometry}
                                            material={materials.turqueza}
                                            skeleton={nodes.Object_11.skeleton}
                                            castShadow
                                            receiveShadow
                                        />
                                        <skinnedMesh
                                            name="Object_12"
                                            geometry={nodes.Object_12.geometry}
                                            material={materials.luz_neon}
                                            skeleton={nodes.Object_12.skeleton}
                                            castShadow
                                            receiveShadow
                                        />
                                        <skinnedMesh
                                            name="Object_13"
                                            geometry={nodes.Object_13.geometry}
                                            material={materials.azul}
                                            skeleton={nodes.Object_13.skeleton}
                                            castShadow
                                            receiveShadow
                                        />
                                        <skinnedMesh
                                            name="Object_14"
                                            geometry={nodes.Object_14.geometry}
                                            material={materials.azul}
                                            skeleton={nodes.Object_14.skeleton}
                                            castShadow
                                            receiveShadow
                                        />
                                        <skinnedMesh
                                            name="Object_15"
                                            geometry={nodes.Object_15.geometry}
                                            material={materials.azul}
                                            skeleton={nodes.Object_15.skeleton}
                                            castShadow
                                            receiveShadow
                                        />
                                        <group
                                            name="Object_8"
                                            position={[0, 45.158, 0]}
                                            rotation={[-Math.PI / 2, 0, 0]}
                                            scale={101.805}
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/RocketRobot.glb')
