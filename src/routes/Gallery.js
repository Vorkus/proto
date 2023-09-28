import {Container} from "react-bootstrap";
import '../styles/Gallery.css';
import Menu from "../parts/Menu";
import Title from "../parts/Title";
import Catalog from "../parts/Catalog";

export default function Gallery() {
    return (
        <Container fluid className={"gallery-container gallery-spacing"}>
            <header>
                <Menu animatedLogo={true} />
                <Title />
            </header>
            <main>
                <Catalog />
            </main>
        </Container>
    );
}