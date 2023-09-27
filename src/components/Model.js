import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect} from "react";

export default function Model({url, activeAnimation}) {
    console.log("Entro Model", url, activeAnimation)
    const { scene, animations } = useGLTF(url)
    const { actions } = useAnimations(animations, scene)

    useEffect(() => {
        console.log("model use effect", activeAnimation)
        if (activeAnimation) {
            actions[activeAnimation].play()
        }
        // for (const actionName in actions) {
        //     actions[actionName].play();
        // }
        // actions["Armature|IdleGround"].play()
        // actions["Armature|RiseUp"].play()
        // actions["Armature|Roar"].play()
        // actions["Armature|RoarToWalk"].play()
        // actions["Armature|Walk"].play()
        // actions["Armature|Fall"].play()
        // currentAnimation ? actions[currentAnimation].play() : actions[animations[0].name].play();
    })

    return <primitive object={scene} />
}