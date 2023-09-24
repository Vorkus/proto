import '../assets/Title.css';
import SearchWidget from "./SearchWidget";

export default function Title() {
    return (
        <section className={"container-fluid title-container d-flex align-items-center justify-content-between row m-0"}>
            <div className={"background title-gradient"}></div>
            <div className={"col-md-6 col-12 text-md-start text-center title-container m-md-0 my-2"}>
                <h1><strong>Models Catalog</strong></h1>
                <p>Create living 3D worlds using open-source 3D models animated by AI.</p>
            </div>
            <div className={"offset-lg-2 col-lg-4 offset-md-1 col-md-5 col-12 search-container m-md-0 my-2"}>
                <SearchWidget />
            </div>
            {/*<div className={"col text-end"}>*/}
            {/*    <img className={"brand-logo pr-4"} src={"https://app.anything.world/static/media/logo_new.e3df371f.svg"} alt={"brand logo"}/>*/}
            {/*</div>*/}
        </section>
    );
}