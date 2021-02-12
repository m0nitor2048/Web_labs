import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {AiFillHeart} from "react-icons/all";

function Footer(props) {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <p className="footer__copyright">Copyright ©2020 All rights reserved | This template is made with <AiFillHeart/> by Colorlib.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;