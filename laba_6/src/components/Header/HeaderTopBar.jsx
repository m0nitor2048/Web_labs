import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {
    AiFillPhone,
    AiOutlineInstagram,
    AiOutlineTwitter,
    FaDribbble,
    FaFacebookF,
    FaTelegramPlane
} from "react-icons/all";

// rsf
function HeaderTopBar(props) {
    return (
        <div className="top__bar">
            <Container>
                <Row className="top__bar">
                    <Col className="top__bar_contacts align-middle" md={3} sm={5} xs={6}>
                        <a href="/"><AiFillPhone/>+00 1234 567</a>
                        <a href="/"><FaTelegramPlane/>youremail@email.com</a>
                    </Col>
                    <Col className="top__bar_reg justify-content-end" md={{span: 3, offset: 6}}
                         sm={{span: 5, offset: 2}} xs={{span: 6, offset: 0}}>
                        <a href="/"><FaFacebookF/></a>
                        <a href="/"><AiOutlineTwitter/></a>
                        <a href="/"><AiOutlineInstagram/></a>
                        <a href="/"><FaDribbble/></a>
                        <a className="top__bar_sign-up" href="/">SIGN UP</a>
                        <a className="top__bar_log-in" href="/">LOG IN</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderTopBar;