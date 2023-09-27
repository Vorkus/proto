import Card from "react-bootstrap/Card";
import {Button, Col, Collapse, Container, Row} from "react-bootstrap";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import ConfigurationSelect from "./ConfigurationSelect";

export default function ConfigurationPanel({handlePresetChange, handleAnimationChange, animationsLabels}) {
    const [open, setOpen] = useState(true);

    const presetsOptions = [
        {
            id: 0,
            value: "default",
            label: "3 lights"
        },
        {
            id: 1,
            value: "apartment",
            label: "Apartment"
        },
        {
            id: 2,
            value: "city",
            label: "City"
        },
        {
            id: 3,
            value: "dawn",
            label: "Dawn"
        },
        {
            id: 4,
            value: "forest",
            label: "Forest"
        },
        {
            id: 5,
            value: "lobby",
            label: "Lobby"
        },
        {
            id: 6,
            value: "park",
            label: "Park"
        },
        {
            id: 7,
            value: "sunset",
            label: "Sunset"
        },
        {
            id: 8,
            value: "warehouse",
            label: "Warehouse"
        },
    ];
    const animationsOptions = animationsLabels.map((value, key) => {
        return {
            id: key,
            value: value,
            label: value,
        }
    })

    return (
        <>
            <Button
                className={"toggle-button btn-light ms-2 my-2"}
                onClick={() => setOpen(!open)}
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
                                            <ConfigurationSelect
                                                label={"Preset:"}
                                                options={presetsOptions}
                                                handleChange={handlePresetChange}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <ConfigurationSelect
                                                label={"Animations:"}
                                                options={animationsOptions}
                                                handleChange={handleAnimationChange}
                                            />
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