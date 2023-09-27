import {useAnimations, useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useEffect, useRef} from "react";

export default function AnimatedModel({url, setAnimationOptions, animationsOptions, currentAnimation}) {
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

    const currentAnimationsOptions = animations.map(animation => animation.name);

    console.log(animations.map(animation => animation.name));

    // if (JSON.stringify(currentAnimationsOptions) !== JSON.stringify(animationsOptions)) {
    //     setAnimationOptions(animations.map(animation => animation.name));
    // }
    // console.log(animationsOptions);

    useEffect(() => {
        // for (const actionName in actions) {
        //     actions[actionName].play();
        // }
        // actions["Armature|IdleGround"].play()
        // actions["Armature|RiseUp"].play()
        // actions["Armature|Roar"].play()
        // actions["Armature|RoarToWalk"].play()
        // actions["Armature|Walk"].play()
        // actions["Armature|Fall"].play()
        currentAnimation ? actions[currentAnimation].play() : actions[animations[0].name].play();
    })

    return <primitive object={scene} />
}