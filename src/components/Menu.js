import Logo from "./Logo";
import {Container, Nav, Navbar} from "react-bootstrap";
import '../assets/menu.css';

export default function Menu() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="menu-nav background-transparent bg-body-tertiary pb-4">
                <Container fluid className={"p-0"}>
                    <Navbar.Brand href="#home" className={"m-0"}>
                        <Logo />
                        <span className={"ms-3"}><strong>Model world</strong></span>
                    </Navbar.Brand>
                    <Navbar.Toggle className={"button-light"} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={"pt-2"}>
                        <Nav>
                            <hr/>
                            <Nav.Link className={"menu-link"} href="#home"><strong>Our models</strong></Nav.Link>
                            <Nav.Link className={"menu-link"} href="#features"><strong>Our community</strong></Nav.Link>
                            <Nav.Link className={"menu-link"} href="#pricing"><strong>About us</strong></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        // <Container className={"navContainer justify-content-between pt-2 pb-4"} fluid>
        //     <Row>
        //         <Col sm={{span: 1}}>
        //             <Logo />
        //         </Col>
        //     </Row>
        // </Container>
    );
}