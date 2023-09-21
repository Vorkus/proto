import '../assets/Title.css';
import SearchWidget from "./SearchWidget";

export default function Title() {
    return (
        <section className={"container-fluid title-container d-flex align-items-center justify-content-between"}>
            <h1 className={"ml-4"}>Models Catalog</h1>
            <SearchWidget />
            <img className={"brand-logo pr-4"} src={"https://app.anything.world/static/media/logo_new.e3df371f.svg"} alt={"brand logo"}/>
        </section>
    );
}