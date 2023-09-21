import '../assets/SearchWidget.css';

export default function SearchWidget() {
    return (
        <form id={"modelSearch"}>
            <label id={"modelSearchLabel"} htmlFor={"modelSearchInput"} className={"form-label"} hidden={true}>Model Search</label>
            <input id={"modelSearchInput"} className={"search-input form-control"} placeholder={"     "} />
            <button>Search</button>
        </form>
    );
}