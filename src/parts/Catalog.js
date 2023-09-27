import {useState} from "react";
import ModelCard from "../components/ModelCard";
import VisualizationModal from "../components/VisualizationModal";
import MockData from "../assets/MockData";
import {Col, Container, Row} from "react-bootstrap";
import Model from "../components/Model";
import PreloadedModel from "../components/PreloadedModel";

export default function Catalog() {
    const [modalData, setModalData] = useState(null);

    const cardsCols = MockData.getAllData().map(data => {
        return (
            <Col
                key={data.id}
                md={3} className={"pb-4"}
            >
                <ModelCard
                    modelInformation={{
                        id: data.id,
                        title: data.title,
                        imageUrl: data.imageUrl,
                    }}
                    onClick={onShowModel}
                />
            </Col>
        )
    });

    function onShowModel(event) {
        setModalData(
            buildModalData(event.currentTarget.id)
        )
    }

    function onHideModel() {
        setModalData(null);
    }

    function onPreviousModel() {
        setModalData(
            buildModalData(modalData.previousId)
        );
    }

    function onNextModel() {
        setModalData(
            buildModalData(modalData.nextId)
        );
    }

    function onPresetChange(event) {
        setModalData(
            {
                ...modalData,
                canvasKey: crypto.randomUUID(),
                preset: event.target.value,
            }
        )
    }

    function onAnimationChange(event) {
        setModalData(
            {
                ...modalData,
                canvasKey: crypto.randomUUID(),
                model:
                    <Model
                        url={modalData.modelData.url}
                        activeAnimation={event.target.value}
                    />
            }
        )
    }

    function buildModalData(modelId) {
        const mockData= MockData.getModelData(modelId);

        return {
            id: mockData.id,
            title: mockData.title,
            modelData: mockData.modelData,
            previousId: MockData.getPreviousId(modelId),
            nextId: MockData.getNextId(modelId),
            preset: modalData && modalData.preset ? modalData.preset : 'default',
            // Preload the model to recover animations, then update with the actual model and the activeAnimation
            animations: [],
            model:
                <PreloadedModel
                    url={MockData.getModelData(modelId).modelData.url}
                    onLoad={onModelPreLoad}
                />,
        };
    }

    // Executed immediately after every new model load
    function onModelPreLoad(animations) {
        // Using an updater function so animationsOptions are added when model is loaded (and only triggers one re-render)
        setModalData( modalData => {
                return {
                    ...modalData,
                    canvasKey: crypto.randomUUID(),
                    animations: animations,
                    model:
                        <Model
                            url={modalData.modelData.url}
                            activeAnimation={animations[0]}
                        />,
                }
            }
        )
    }

    return (
        <Container fluid className={"no-gutters"}>
            <VisualizationModal
                data={modalData}
                onHide={onHideModel}
                onPrevious={onPreviousModel}
                onNext={onNextModel}
                onPresetChange={onPresetChange}
                onAnimationChange={onAnimationChange}
            />
            <Container fluid className={"p-0"}>
                <h2 className={"text-start m-0"}>360º Preview models</h2>
                <hr className={"mt-1 mb-4"} />
            </Container>
            <Row>
                { cardsCols }
            </Row>
        </Container>
    );
}