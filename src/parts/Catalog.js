import {useState} from "react";
import ModelCard from "../components/ModelCard";
import VisualizationModal from "../components/VisualizationModal";
import MockData from "../assets/MockData";
import {Col, Container, Row} from "react-bootstrap";

export default function Catalog() {
    const [modalData, setModalData] = useState({});

    function handleCardClick(event) {
        updateModalData(event.currentTarget.id);
    }

    function updateModalData(id) {
        setModalData({
            show: true,
            title: MockData.getData(id).title,
            canvasKey: crypto.randomUUID(),
            modelUrl: `/3d_models/${id}/scene.gltf`,
            nextId: MockData.getNextId(id),
            previousId: MockData.getPreviousId(id),
        });
    }

    return (
        <Container fluid className={"no-gutters"}>
            <VisualizationModal
                modalData={modalData}
                onHide={() => setModalData({show: false})}
                onPrevious={() => updateModalData(modalData.previousId)}
                onNext={() => updateModalData(modalData.nextId)}
            />
            <Container fluid className={"p-0"}>
                <h2 className={"text-start m-0"}>360º Preview models</h2>
                <hr className={"mt-1 mb-4"} />
            </Container>
            <Row>
                {
                    MockData.getData().map(data => (
                        <Col
                            key={crypto.randomUUID()}
                            md={3} className={"pb-4"}
                        >
                            <ModelCard
                                modelData={{
                                    id: data.id,
                                    title: data.title,
                                    imageUrl: data.imageUrl,
                                }}
                                handleClick={handleCardClick}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}