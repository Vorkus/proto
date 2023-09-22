import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import {Canvas} from "@react-three/fiber";
import DetailScene from "./DetailScene";
import {OrbitControls} from "@react-three/drei";

export default function VisualizationModal({show, onHide, modalData}) {
    return (
        <Modal show={show} fullscreen={true} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{modalData.data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body id={"canvasContainer"} className={"p-0"}>
                <Canvas>
                    <DetailScene
                        url={"/3d_models/" + modalData.id + "/scene.gltf"}
                    />
                    <OrbitControls />
                </Canvas>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}