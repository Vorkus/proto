import {useAnimations, useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useEffect, useRef} from "react";

export default function AnimatedModel({url}) {
    // const gltf = useGLTF(url);
    // const scene = useRef(gltf.scene);
    //
    // console.log(gltf.animations);
    //
    // // TODO: apply shadows to every node of the moodel
    // // gltf.scene.traverse( function( node ) {
    // //     if ( node.isMesh ) {
    // //         node.receiveShadow = true;
    // //         node.castShadow = true;
    // //     }
    // // } );
    //
    // useFrame(({clock}) => {
    //     // console.log(clock.getElapsedTime());
    //     // scene.current.position.setY(100*Math.sin(clock.getElapsedTime()));
    // });
    //
    // return (
    //     <primitive object={scene.current}></primitive>
    // );

    const { scene, animations } = useGLTF(url)
    const { actions } = useAnimations(animations, scene)

    useEffect(() => {
        actions["Armature|Roar"].play()
    })
    console.log(animations);
    console.log(actions);

    return <primitive object={scene} />
}