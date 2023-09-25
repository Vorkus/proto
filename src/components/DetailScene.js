import {Bounds, Center, ContactShadows} from "@react-three/drei";
import Model from "./Model";
import {useCallback, useState} from "react";

export default function DetailScene({modelUrl}) {
    const [{scale, far, height}, setShadows] = useState({scale: 0, far: 0, height: 0});

    const onCentered = useCallback(props => {
        const radius = props.boundingSphere.radius;
        setShadows({
            scale: radius * 4,
            far: radius,
            height: props.height,
        });
    }, []);

    if (!modelUrl) return null;

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
                    <Model url={modelUrl}/>
                </Center>
            </Bounds>

            {/* PRESETS */}
            {/*<Stage*/}
            {/*    shadows={"contact"}*/}
            {/*    adjustCamera={1.2}*/}
            {/*    environment={"dawn"}*/}
            {/*    intensity={0.1}*/}
            {/*>*/}
            {/*    <Model*/}
            {/*        url={modelUrl}*/}
            {/*    />*/}
            {/*</Stage>*/}
        </>
    );
}