import {Stage} from "@react-three/drei";
import Model from "./Model";

export default function Preset({modelUrl, environment}) {
    if (!modelUrl || !environment) return null;

    return (
        <Stage
            shadows={"contact"}
            adjustCamera={1.2}
            environment={environment}
            intensity={0.1}
        >
            <Model
                url={modelUrl}
            />
        </Stage>
    );
}