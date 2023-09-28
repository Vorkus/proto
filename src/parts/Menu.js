import Logo from "../components/Logo";
import {Container, Nav, Navbar} from "react-bootstrap";
import '../styles/Menu.css';

export default function Menu({animatedLogo}) {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="menu-nav background-transparent bg-body-tertiary">
                <Container fluid className={"p-0"}>
                    <Navbar.Brand href={"/proto/#/"} className={"m-0"}>
                        <Logo animatedLogo={animatedLogo}/>
                        <span className={"ms-3"}><strong>Model world</strong></span>
                    </Navbar.Brand>
                    <Navbar.Toggle className={"button-light"} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={"pt-2"}>
                        <Nav className={"text-md-start text-center"}>
                            <hr/>
                            <Nav.Link className={"menu-link"} href={"/proto/#/gallery"}><strong>Gallery</strong></Nav.Link>
                            <Nav.Link className={"menu-link"} href="#"><strong>Our community</strong></Nav.Link>
                            <Nav.Link className={"menu-link"} href="#"><strong>About us</strong></Nav.Link>
                            <hr/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}