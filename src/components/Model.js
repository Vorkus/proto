import {useGLTF} from "@react-three/drei";

export default function Model({url}) {
    const gltf = useGLTF(url);

    gltf.scene.traverse( function( node ) {
        if ( node.isMesh ) {
            node.receiveShadow = true;
            node.castShadow = true;
        }
    } );

    return (
        <primitive object={gltf.scene}></primitive>
    );
}