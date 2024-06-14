import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    FaFacebookSquare,
    FaInstagram,
    FaYoutube,
    FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FooterComponent() {
    return (
        <footer className="bg-body-tertiary text-dark py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Información</h5>
                        <p>¿Quiénes somos?</p>
                        <p>Política de privacidad</p>
                        <p>Términos y condiciones</p>
                    </Col>
                    
                    <Col md={4}>
                        <h5>SportFlash</h5>
                        <p>Dirección: Avenida del 456</p>
                        <p>Teléfono: 9876543210</p>
                        <p>Email: contacto@sportflash.com</p>
                    </Col>

                    <Col md={4} className="icons">
                        <h5>Síguenos en</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://es-la.facebook.com/">
                                    <FaFacebookSquare fill="gray" /> @Sport_News
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <FaInstagram fill="gray" /> @SportNews
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/?mx=2">
                                    <FaXTwitter fill="gray" /> @Sport__News
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/">
                                    <FaYoutube fill="gray" /> SportNews
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/es/">
                                    <FaTiktok fill="gray" /> @Sport-News
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;
