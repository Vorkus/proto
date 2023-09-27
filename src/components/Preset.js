import {Stage} from "@react-three/drei";

export default function Preset({model, shadows, environment}) {
    if (!model || !environment) return null;

    return (
        <Stage
            shadows={shadows}
            adjustCamera={1.2}
            environment={environment}
            intensity={0.1}
        >
            {model}
        </Stage>
    );
}