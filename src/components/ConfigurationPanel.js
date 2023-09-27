import Card from "react-bootstrap/Card";
import {Button, Col, Collapse, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ConfigurationPanel({onPresetChange, onAnimationChange}) {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Button
                className={"toggle-button btn-light ms-2 my-2"}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                <FontAwesomeIcon icon={icon({name: "cog"})}/>
            </Button>
            <Collapse in={open}>
                <Container id={"configuration"} className={"configuration-container ps-2 w-auto"}>
                    <Row className={"w-auto"}>
                        <Col md={2} className={"w-auto"}>
                            <Card>
                                <Card.Body>
                                    <Row className={"pb-2"}>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label><strong>Preset: </strong></Form.Label>
                                                <Form.Select
                                                    className={"preset-select"}
                                                    onChange={onPresetChange}
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
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label><strong>Animations: </strong></Form.Label>
                                                <Form.Select
                                                    className={"preset-select"}
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
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Collapse>
        </>
    );
}