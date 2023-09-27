import {useGLTF} from "@react-three/drei";

export default function PreloadedModel({url, onLoad}) {
    const { animations } = useGLTF(url)

    onLoad(animations.map(animation => animation.name))

    return null;
}