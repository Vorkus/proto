import '../assets/SearchWidget.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {useState} from "react";

export default function SearchWidget() {
    const [inputValue, setinputValue] = useState('');
    const [cancelButtonVisibility, setcancelButtonVisibility] = useState('hidden');

    function handleInputFocus() {
        setcancelButtonVisibility('visible');
    }

    function handleInputBlur() {
        setcancelButtonVisibility('hidden');
    }

    function handleRemoveMouseDown(event) {
        event.preventDefault();
        setinputValue('');
    }

    function handleInputChange(event) {
        setinputValue(event.target.value);
    }

    return (
        <form id={"modelSearch"} className={"d-flex search-form"}>
            <label id={"modelSearchLabel"} htmlFor={"modelSearchInput"} className={"form-label"} hidden={true}>Model Search</label>
            <input
                id={"modelSearchInput"}
                className={"search-input form-control"}
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
        </form>
    );
}

