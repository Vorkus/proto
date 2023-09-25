import Preset from "./Preset";
import ThreeLightsPreset from "./ThreeLightsPreset";

export default function DetailScene({modelUrl, preset}) {
    if (!modelUrl || !preset) return null;

    let scene;
    if ("default" === preset) {
        scene = () => {
            return (
                <ThreeLightsPreset
                    modelUrl={modelUrl}
                />
            );

        }
    } else {
        scene = () => {
            return (
                <Preset
                    modelUrl={modelUrl}
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