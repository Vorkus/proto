import {useGLTF} from "@react-three/drei";

export default function Model({url}) {
    const gltf = useGLTF(url);

    return (
        <primitive object={gltf.scene}></primitive>
    );
}