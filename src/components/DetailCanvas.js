import {Loader, OrbitControls} from "@react-three/drei";
import ConfigurationPanel from "./ConfigurationPanel";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import DetailScene from "./DetailScene";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function DetailCanvas({data, onPresetChange, onAnimationChange}) {
    return (
        <>
            <Loader
                containerStyles={{backgroundColor: "white"}}
                barStyles={{backgroundColor: "grey", color: "black"}}
                dataStyles={{color: "black"}}
            />

            <ConfigurationPanel
                animations={data.animations}
                onPresetChange={onPresetChange}
                onAnimationChange={onAnimationChange}
            />

            <Canvas
                key={data.canvasKey}
                className={"detailCanvas"}
                camera={{ far: 2000, position: [0, 0, 3000] }}
                shadows
                frameloop={data.modelData.frameloop}
            >
                <Suspense>
                    <DetailScene
                        model={data.model}
                        preset={data.preset}
                        shadows={0 < data.animations.length ? false : "contact"}
                    />
                    <OrbitControls makeDefault />
                </Suspense>
            </Canvas>

            <FontAwesomeIcon
                icon={icon({name: "expand"})}
                size={"2xl"}
                className={"expand-icon mb-4 me-4"}
                onMouseDown={async () => {
                    await document.getElementsByClassName("detailCanvas")[0].requestFullscreen();
                }}
            />
        </>
    );
}