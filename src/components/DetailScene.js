import Preset from "./Preset";
import ThreeLightsPreset from "./ThreeLightsPreset";
import StaticModel from "./StaticModel";
import AnimatedModel from "./AnimatedModel";

export default function DetailScene({modelData, preset}) {
    if (!modelData || !preset) return null;

    let model;

    if (modelData.hasAnimations) {
        model = <AnimatedModel url={modelData.url}/>
    } else {
        model = <StaticModel url={modelData.url}/>
    }

    let scene;
    if ("default" === preset) {
        scene = () => {
            return (
                <ThreeLightsPreset
                    model={model}
                    shadows={modelData.shadows}
                />
            );

        }
    } else {
        scene = () => {
            return (
                <Preset
                    model={model}
                    shadows={modelData.shadows}
                    environment={preset}
                />
            );
        };
    }

    return (
        <>
            { scene() }
        </>
    );
}