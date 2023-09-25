import SearchWidget from "../components/SearchWidget";
import {Col, Container, Row} from "react-bootstrap";

export default function Title() {
    return (
        <Container fluid className={"pb-3"}>
            <Row className={"align-items-center justify-content-between"}>
                <Col md={6} className={"text-md-start text-center m-md-0 mb-2 p-0"}>
                    <h1><strong>Gallery</strong></h1>
                    <p>Create living 3D worlds using open-source 3D models animated by AI.</p>
                </Col>
                <Col lg={{offset: 2, span: 4}} md={{offset:1, span: 5}} className={"search-container m-md-0 my-2 p-0 pt-3"}>
                    <SearchWidget />
                </Col>
            </Row>
        </Container>
    );
}