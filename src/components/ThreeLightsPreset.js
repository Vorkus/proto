import {Bounds, Center, ContactShadows} from "@react-three/drei";
import StaticModel from "./StaticModel";
import {useCallback, useState} from "react";

export default function ThreeLightsPreset({model, shadows}) {
    const [{scale, far, height}, setShadows] = useState({scale: 0, far: 0, height: 0});
    const onCentered = useCallback(props => {
        if ("contact" === shadows) {
            const radius = props.boundingSphere.radius;
            setShadows({
                scale: radius * 4,
                far: radius,
                height: props.height,
            });
        }
    }, [shadows]);

    if (!model) return null;

    return (
        <>
            <ambientLight color={"white"} intensity={2.75} />
            <directionalLight
                color={"white"}
                intensity={0.5}
                position={[-1, 0, 0]}
            />
            <directionalLight
                color={"white"}
                intensity={0.5}
                position={[1, 0, 1]}
            />
            <directionalLight
                color={"white"}
                intensity={0.25}
                position={[-1, 0, 1]}
            />
            <directionalLight
                color={"white"}
                intensity={0.1}
                position={[-0.5, 0, -1]}
            />

            <ContactShadows position={[0, -height/2, 0]} scale={scale} far={far} blur={2} />
            <Bounds clip fit observe>
                <Center onCentered={onCentered}>
                    {model}
                    {/*<StaticModel url={modelUrl}/>*/}
                </Center>
            </Bounds>
        </>
    );
}