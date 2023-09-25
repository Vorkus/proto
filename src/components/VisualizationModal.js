import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import {Canvas} from "@react-three/fiber";
import DetailScene from "./DetailScene";
import {Loader, OrbitControls} from "@react-three/drei";
import {Suspense} from "react";
import '../styles/buttons.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function VisualizationModal({modalData, onHide, onPrevious, onNext}) {
    async function handlePrevious() {
        onPrevious();
    }

    async function handleNext() {
        onNext();
    }

    return (
        <Modal show={modalData.show} fullscreen onHide={onHide}>
            <Modal.Header className={"background-gradient"} closeButton>
                <Modal.Title>
                    {modalData.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id={"canvasContainer"} className={"p-0"}>
                <Loader
                    containerStyles={{backgroundColor: "white"}}
                    barStyles={{backgroundColor: "grey", color: "black"}}
                    dataStyles={{color: "black"}}
                />
                <Canvas
                    key={modalData.canvasKey}
                    camera={{position: [0,0,5000]}}
                    shadows
                    frameloop="demand"
                    visibility={modalData.show ? "visible" : "hidden"}
                >
                    <Suspense>
                        <ambientLight color={"white"} intensity={2} />
                        <DetailScene
                            modelUrl={modalData.modelUrl}
                        />
                        <OrbitControls makeDefault />
                    </Suspense>
                </Canvas>

            </Modal.Body>
            <Modal.Footer className={"background-gradient justify-content-between"}>
                <Button className={"modal-button button-light"} onClick={handlePrevious} style={{visibility: !modalData.previousId ? 'hidden' : 'visible'}} size={"lg"}>
                    <FontAwesomeIcon icon={icon({name: "arrow-left-long"})} /> Previous
                </Button>
                <Button className={"modal-button button-light"} onClick={handleNext} style={{visibility: !modalData.nextId ? 'hidden' : 'visible'}} size={"lg"}>
                    Next <FontAwesomeIcon icon={icon({name: "arrow-right-long"})} />
                </Button>
            </Modal.Footer>
        </Modal>
    );
}