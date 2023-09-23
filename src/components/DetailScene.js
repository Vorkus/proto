import {Stage} from "@react-three/drei";
import Model from "./Model";

export default function DetailScene({modelUrl}) {

    if (!modelUrl) return null;

    return (
        <>
            <ambientLight color={"white"} intensity={2} />
            {/*<directionalLight*/}
            {/*    color={"white"}*/}
            {/*    intensity={0.5}*/}
            {/*    position={[0, 0, 1]}*/}
            {/*/>*/}

            <Stage
                preset={"rembrandt"}
                shadows={"contact"}
                adjustCamera={1.2}
                environment={"city"}
                intensity={0.1}
            >
                <Model
                    url={modelUrl}
                />
            </Stage>
        </>
    );
}