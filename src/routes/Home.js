import '../styles/Home.css';
import Menu from "../parts/Menu";
import {Container} from "react-bootstrap";
import {Loader, Scroll, ScrollControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import HomeItems from "../components/HomeItems";

export default function Home() {
    return (
        <Container fluid className={"home-container p-0 w-100 h-100"}>
            <header className={"home-header px-4"}>
                <Menu animatedLogo={false}/>
            </header>
            <main className={"canvas-container w-100"}>
                <Loader
                    containerStyles={{backgroundColor: "white"}}
                />
                <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
                    <color attach="background" args={["white"]} />
                    <ScrollControls pages={4} damping={0.1}>
                        <HomeItems />
                        <Scroll html style={{ width: '100%' }}>
                            <h1 className={"landing-text"} style={{ position: 'absolute', top: `50vh`, right: '25vw', fontSize: `calc(12vw)` }}>Hello!</h1>
                            <h1 style={{ position: 'absolute', top: '175vh', left: '10vw' }}>Find any 3D model</h1>
                            <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>you may need...</h1>
                            <div style={{ position: 'absolute', top: '270vh', left: '8vw' }}>
                                <img style={{position: "relative", top: "15vh",left: "20vw", width: "40vw" }} src={"/proto/home/12/12.gif"} alt={"Dino walking"}/>
                                <h1 className={"animated-text"} style={{position: "relative", top: "30vh"}}>Now animated!</h1>
                            </div>
                        </Scroll>
                    </ScrollControls>
                </Canvas>
            </main>
        </Container>
    );
}