import '../styles/Home.css';
import Menu from "../parts/Menu";
import {Container} from "react-bootstrap";
import {Scroll, ScrollControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

export default function Home() {
    return (
        <Container fluid className={"home-container p-0 w-100 h-100"}>
            <header className={"home-header"}>
                <Menu animatedLogo={false}/>
            </header>
            <main className={"canvas-container w-100"}>
                <Canvas>
                    <ScrollControls pages={3} damping={0.1}>
                        <Scroll html>
                            {/* DOM contents in here will scroll along */}
                            <h1>html in here (optional)</h1>
                            <h1 style={{ top: '100vh' }}>second page</h1>
                            <h1 style={{ top: '200vh' }}>third page</h1>
                        </Scroll>
                    </ScrollControls>
                </Canvas>
            </main>
        </Container>
    );
}