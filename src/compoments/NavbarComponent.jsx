import React from "react";
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import { FcSportsMode } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";

function NavbarCompoment() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">
                    <FcSportsMode /> SportFlash
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/News">Noticias</Nav.Link>
                        <NavDropdown
                            title="Deportes"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="/Soccer">
                                Futbol
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Basketball">
                                Baloncesto
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Tennis">
                                Tenis
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/F1">
                                F1
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/MotoGp">
                                MotoGP
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/About">Nosotros</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            disabled={true}
                        />
                        <Button variant="outline-success">
                            <FaSearch />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarCompoment;
