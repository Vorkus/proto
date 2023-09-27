import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import '../styles/buttons.css';
import '../styles/VisualizationModal.css';
import DetailCanvas from "./DetailCanvas";

export default function VisualizationModal({data, onHide, onPrevious, onNext, onPresetChange, onAnimationChange}) {
    if (!data) {
        return null;
    }

    return (
        <Modal show fullscreen onHide={onHide}>
            <Modal.Header className={"background-gradient"} closeButton>
                <Modal.Title>
                    {data.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id={"canvasContainer"} className={"p-0"}>
                <DetailCanvas
                    data={data}
                    onPresetChange={onPresetChange}
                    onAnimationChange={onAnimationChange}
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