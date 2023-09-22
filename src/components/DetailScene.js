import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Bounds} from "@react-three/drei";

export default function DetailScene({url}) {
    const gltf = useLoader(GLTFLoader, url);

    return (
        <>
            <ambientLight color={"white"} intensity={1} />
            <directionalLight
                color={"white"}
                intensity={1}
                position={[0, 1, 1]}
            />
            <Bounds clip fit observe>
                <primitive object={gltf.scene}></primitive>
            </Bounds>
        </>
    );
}