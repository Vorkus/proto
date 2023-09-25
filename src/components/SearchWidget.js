import {useState} from "react";
import {Badge, Form, Stack} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import '../styles/SearchWidget.css';
import '../styles/buttons.css';

export default function SearchWidget() {
    const [inputValue, setinputValue] = useState('');
    const [cancelButtonVisibility, setcancelButtonVisibility] = useState("hidden");

    function handleInputFocus() {
        setcancelButtonVisibility("visible");
    }

    function handleInputBlur() {
        setcancelButtonVisibility("hidden");
    }

    function handleRemoveMouseDown(event) {
        event.preventDefault();
        setinputValue('');
    }

    function handleInputChange(event) {
        setinputValue(event.target.value);
    }

    return (
        <>
            <Form id={"modelSearch"} className={"mb-2"}>
                <Form.Group className={"d-flex align-items-center"}>
                    <Form.Label
                        id={"modelSearchLabel"}
                        htmlFor={"modelSearchInput"}
                        hidden
                    />
                    <Form.Control
                        id={"modelSearchInput"}
                        className={"search-input"}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChange={handleInputChange}
                        placeholder={"     "}
                        value={inputValue}
                        required
                    />
                    <FontAwesomeIcon
                        className={"modelSearchRemove"}
                        icon={icon({name: "xmark"})}
                        style={{visibility: cancelButtonVisibility}}
                        onMouseDown={handleRemoveMouseDown}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon className={"modelSearchButton"} icon={icon({name: 'magnifying-glass'})}></FontAwesomeIcon>
                </Form.Group>
            </Form>
            <Stack direction={"horizontal"} gap={2} className={"px-3"}>
                <Badge pill bg={"none"} className={"ms-auto button-light"}>Statue</Badge>
                <Badge pill bg={"none"} className={"button-light"}>Music</Badge>
                <Badge pill bg={"none"} className={"button-light"}>Animal</Badge>
                <Badge pill bg={"none"} className={"button-light"}>Book</Badge>
                <Badge pill bg={"none"} className={"button-light"}>Armor</Badge>
            </Stack>
        </>
    );
}

