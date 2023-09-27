import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import {Canvas} from "@react-three/fiber";
import DetailScene from "./DetailScene";
import {Loader, OrbitControls} from "@react-three/drei";
import {Suspense, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import '../styles/buttons.css';
import '../styles/VisualizationModal.css';
import ConfigurationPanel from "./ConfigurationPanel";

export default function VisualizationModal({data, onHide, onPrevious, onNext, onPresetChange, onAnimationChange}) {
    // const [configuration, setConfiguration] = useState({preset: "default", animation: null});
    // const [animationsOptions, setAnimationsOptions] = useState([]);

    if (!data) {
        return null;
    }

    console.log("entro VisualizationModal", data);

    return (
        <Modal show fullscreen onHide={onHide}>
            <Modal.Header className={"background-gradient"} closeButton>
                <Modal.Title>
                    {data.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id={"canvasContainer"} className={"p-0"}>
                <Loader
                    containerStyles={{backgroundColor: "white"}}
                    barStyles={{backgroundColor: "grey", color: "black"}}
                    dataStyles={{color: "black"}}
                />

                <ConfigurationPanel
                    animations={data.animations}
                    onPresetChange={onPresetChange}
                    onAnimationChange={onAnimationChange}
                    // onAnimationChange={props => {
                    //     setConfiguration({preset: configuration.preset, animation: props.target.value})
                    //     console.log(modalData);
                    //     refreshModalData()
                    // }}
                    // animationsLabels={animationsOptions}
                />

                <Canvas
                    key={data.canvasKey}
                    className={"detailCanvas"}
                    camera={{ far: 2000, position: [0, 0, 3000] }}
                    // shadows
                    frameloop={data.modelData.frameloop}
                    // visibility={modalData.show ? "visible" : "hidden"}
                >
                    <Suspense>
                        <DetailScene
                            model={data.model}
                            preset={data.preset}
                            // setAnimationOptions={setAnimationsOptions}
                            // animationsOptions={animationsOptions}
                            // configuration={configuration}
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
            </Modal.Body>
            <Modal.Footer className={"background-gradient justify-content-between"}>
                <Button
                    size={"lg"}
                    className={"modal-button button-light"}
                    style={{visibility: !data.previousId ? 'hidden' : 'visible'}}
                    onClick={onPrevious}
                >
                    <FontAwesomeIcon icon={icon({name: "arrow-left-long"})} /> Previous
                </Button>
                <Button
                    size={"lg"}
                    className={"modal-button button-light"}
                    style={{visibility: !data.nextId ? 'hidden' : 'visible'}}
                    onClick={onNext}
                >
                    Next <FontAwesomeIcon icon={icon({name: "arrow-right-long"})} />
                </Button>
            </Modal.Footer>
        </Modal>
    );
}