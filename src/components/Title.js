import '../assets/Title.css';
import SearchWidget from "./SearchWidget";

export default function Title() {
    return (
        <section className={"container-fluid title-container d-flex align-items-end justify-content-between"}>
            <h1>Models Catalog</h1>
            <SearchWidget />
            <img className={"brand-logo pr-4"} src={"https://app.anything.world/static/media/logo_new.e3df371f.svg"}/>
        </section>
    );
}