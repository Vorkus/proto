import Preset from "./Preset";
import ThreeLightsPreset from "./ThreeLightsPreset";

export default function DetailScene({model, preset, shadows}) {
    if (!model) return null;

    let scene;
    if ("default" === preset) {
        scene = () => {
            return (
                <ThreeLightsPreset
                    model={model}
                    shadows={shadows}
                />
            );

        }
    } else {
        scene = () => {
            return (
                <Preset
                    model={model}
                    shadows={shadows}
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