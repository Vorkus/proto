import Preset from "./Preset";
import ThreeLightsPreset from "./ThreeLightsPreset";
import StaticModel from "./StaticModel";
import AnimatedModel from "./AnimatedModel";

export default function DetailScene({modelData, setAnimationOptions, animationsOptions, configuration}) {
    if (!modelData || !configuration) return null;

    let model;

    if (modelData.hasAnimations) {
        model =
            <AnimatedModel
                url={modelData.url}
                setAnimationOptions={setAnimationOptions}
                animationsOptions={animationsOptions}
                currentAnimation={configuration.animation}
            />
    } else {
        model = <StaticModel url={modelData.url}/>
    }

    let scene;
    if ("default" === configuration.preset) {
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
                    environment={configuration.preset}
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