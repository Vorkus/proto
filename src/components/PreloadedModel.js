import {useAnimations, useGLTF} from "@react-three/drei";

export default function PreloadedModel({url, onLoad}) {
    console.log("Entro preloaded")
    const { scene, animations } = useGLTF(url)
    const { actions } = useAnimations(animations, scene)

    onLoad(animations.map(animation => animation.name))

    return null;
}