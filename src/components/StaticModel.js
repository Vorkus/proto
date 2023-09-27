import {useAnimations, useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useEffect, useRef} from "react";

export default function StaticModel({url}) {
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

    const { scene } = useGLTF(url)

    return <primitive object={scene} />
}