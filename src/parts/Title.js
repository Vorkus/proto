import SearchWidget from "../components/SearchWidget";
import {Col, Container, Row} from "react-bootstrap";

export default function Title() {
    return (
        <Container fluid className={"pt-4 pb-3"}>
            <Row className={"align-items-center justify-content-between"}>
                <Col md={6} className={"text-md-start text-center m-md-0 mb-2 p-0"}>
                    <h1><strong>Gallery</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </Col>
                <Col lg={{offset: 2, span: 4}} md={{offset:1, span: 5}} className={"search-container m-md-0 my-2 p-0 pt-3"}>
                    <SearchWidget />
                </Col>
            </Row>
        </Container>
    );
}