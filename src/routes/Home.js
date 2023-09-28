import '../styles/Home.css';
import Menu from "../parts/Menu";
import {Container} from "react-bootstrap";
import {Scroll, ScrollControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import HomeItems from "../components/HomeItems";

export default function Home() {
    return (
        <Container fluid className={"home-container p-0 w-100 h-100"}>
            <header className={"home-header px-4"}>
                <Menu animatedLogo={false}/>
            </header>
            <main className={"canvas-container w-100"}>
                <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}> <color attach="background" args={['#f0f0f0']} />
                    <ScrollControls pages={6} damping={0.1}>
                        {/*<Scroll html>*/}
                        {/*    /!* DOM contents in here will scroll along *!/*/}
                        {/*    <h1 className={"page1"}>first page</h1>*/}
                        {/*    <h1 className={"page2"}>second page</h1>*/}
                        {/*    <h1 className={"page3"}>third page</h1>*/}
                        {/*</Scroll>*/}
                        <HomeItems />
                        <Scroll html style={{ width: '100%' }}>
                            <h1 style={{ position: 'absolute', top: `100vh`, right: '20vw', fontSize: '25em', transform: `translate3d(0,-100%,0)` }}>Find</h1>
                            <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>any</h1>
                            <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>3D model</h1>
                            <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>you may need...</h1>
                            <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>Now animated!</h1>
                        </Scroll>
                    </ScrollControls>
                </Canvas>
            </main>
        </Container>
    );
}