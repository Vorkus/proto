import '../styles/Home.css';
import Menu from "../parts/Menu";
import {Container} from "react-bootstrap";

export default function Home() {
    return (
        <Container fluid className={"home-container"}>
            <header>
                <Menu />
            </header>
            <main>
            </main>
        </Container>
    );
}