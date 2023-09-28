import * as THREE from 'three'
import {useRef, useState} from "react";
import {useIntersect, Image} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";

export default function HomeItem({ url, scale, maxScale, grayscale, ...props }) {
    const visible = useRef(false)
    const [hovered, hover] = useState(false)
    const ref = useIntersect((isVisible) => (visible.current = isVisible))
    const { height } = useThree((state) => state.viewport)
    useFrame((state, delta) => {
        ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
        ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
        ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 0 : grayscale, 100, delta)

        ref.current.material.scale[0] = ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, hovered ? maxScale[0] : scale[0], 6, delta)
        ref.current.material.scale[1] = ref.current.scale.y = THREE.MathUtils.damp(ref.current.scale.y, hovered ? maxScale[1] : scale[1], 6, delta)
    })
    return (
        <group {...props}>
            <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url} />
        </group>
    )
}