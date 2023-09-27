import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect} from "react";

export default function Model({url, activeAnimation}) {
    const { scene, animations } = useGLTF(url)
    const { actions } = useAnimations(animations, scene)

    useEffect(() => {
        if (activeAnimation) {
            actions[activeAnimation].play()
        }
    })

    return <primitive object={scene} />
}