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
                adjustCamera={true}
                environment={"city"}
                intensity={0.1}
                center={{front: true}}
            >
                <Model
                    url={modelUrl}
                />
            </Stage>
        </>
    );
}