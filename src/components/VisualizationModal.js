import Modal from 'react-bootstrap/Modal';
import {Button, Form} from "react-bootstrap";
import {Canvas} from "@react-three/fiber";
import DetailScene from "./DetailScene";
import {Loader, OrbitControls} from "@react-three/drei";
import {Suspense, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import '../styles/buttons.css';
import '../styles/VisualizationModal.css';

export default function VisualizationModal({modalData, onHide, onPrevious, onNext}) {
    const [preset, setPreset] = useState('default');
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
                <Form.Select
                    className={"preset-select ms-2 mt-2"}
                    onChange={props => setPreset(props.target.value) }
                    defaultValue={"default"}
                >
                    <option value={"default"}>3 lights</option>
                    <option value={"apartment"}>Apartment</option>
                    <option value={"city"}>City</option>
                    <option value={"dawn"}>Dawn</option>
                    <option value={"forest"}>Forest</option>
                    <option value={"lobby"}>Lobby</option>
                    <option value={"park"}>Park</option>
                    <option value={"studio"}>Studio</option>
                    <option value={"sunset"}>Sunset</option>
                    <option value={"warehouse"}>Warehouse</option>
                </Form.Select>
                <Canvas
                    key={modalData.canvasKey}
                    className={"detailCanvas"}
                    camera={{ far: 2000, position: [0, 0, 3000] }}
                    shadows
                    frameloop="demand"
                    visibility={modalData.show ? "visible" : "hidden"}
                >
                    <Suspense>
                        <DetailScene
                            modelUrl={modalData.modelUrl}
                            preset={preset}
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