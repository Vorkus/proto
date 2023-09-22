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
        <>
            <form id={"modelSearch"} className={"d-flex search-form mb-2"}>
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
            <div className={"d-flex justify-content-end help-badges mb-2 flex-wrap"}>
                <span className="badge rounded-pill m-1">Statue</span>
                <span className="badge rounded-pill m-1">Music</span>
                <span className="badge rounded-pill m-1">Animal</span>
                <span className="badge rounded-pill m-1">Armor</span>
                <span className="badge rounded-pill m-1">Book</span>
            </div>
        </>
    );
}

