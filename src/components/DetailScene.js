import Preset from "./Preset";
import ThreeLightsPreset from "./ThreeLightsPreset";
import StaticModel from "./StaticModel";
import AnimatedModel from "./AnimatedModel";

export default function DetailScene({model, setAnimationOptions, animationsOptions, preset, configuration}) {
    if (!model) return null;

    // console.log(modelData.animations)

    // let model;
    //
    // if (0 < modelData.animations.length) {
    //     model =
    //         <AnimatedModel
    //             url={modelData.url}
    //             // setAnimationOptions={setAnimationOptions}
    //             // animationsOptions={animationsOptions}
    //             // currentAnimation={configuration.animation}
    //         />
    // } else {
    //     model = <StaticModel url={modelData.url}/>
    // }

    let scene;
    if ("default" === preset) {
        scene = () => {
            return (
                <ThreeLightsPreset
                    model={model}
                    // shadows={modelData.shadows}
                />
            );

        }
    } else {
        scene = () => {
            return (
                <Preset
                    model={model}
                    // shadows={modelData.shadows}
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