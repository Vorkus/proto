import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";

export default function VisualizationModal({show, onHide, modalData}) {
    return (
        <Modal show={show} fullscreen={true} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{modalData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalData.title}</Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}