import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import {Canvas} from "@react-three/fiber";
import DetailScene from "./DetailScene";
import {Loader, OrbitControls} from "@react-three/drei";
import {Suspense, useState} from "react";

export default function VisualizationModal({onHide, modalData, onNext, onPrevious}) {
    const [canvasKey, setCanvasKey] = useState(crypto.randomUUID());

    async function handlePrevious() {
        setCanvasKey(crypto.randomUUID());
        onPrevious();
    }

    async function handleNext() {
        setCanvasKey(crypto.randomUUID());
        onNext();
    }

    return (
        <Modal show={modalData.show} fullscreen={true} onHide={onHide}>
            <Modal.Header className={"title-gradient"} closeButton>
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
                <Canvas key={canvasKey} camera={{position: [0,0,5000]}} frameloop="demand" visibility={modalData.show ? "visible" : "hidden"} >
                    <Suspense>
                        <ambientLight color={"white"} intensity={2} />
                        <DetailScene
                            modelUrl={modalData.modelUrl}
                        />
                        <OrbitControls makeDefault />
                    </Suspense>
                </Canvas>

            </Modal.Body>
            <Modal.Footer className={"title-gradient"}>
                <Button onClick={handlePrevious} disabled={!modalData.previousId}>Previous</Button>
                <Button onClick={handleNext} disabled={!modalData.nextId}>Next</Button>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}