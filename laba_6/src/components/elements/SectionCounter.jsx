import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function SectionCounter(props) {
    return (

            <Container className="section__counter container_margin">
                <Row className="text-center">
                    <Col md={3} className="">
                        <strong>3,000</strong><br/>
                        <span>Our Satisfied Customers</span>
                    </Col>
                    <Col md={3} className="">
                        <strong>115</strong><br/>
                        <span>Years of Experience</span>
                    </Col>
                    <Col md={3} className="">
                        <strong>100</strong><br/>
                        <span>Kinds of Liquor</span>
                    </Col>
                    <Col md={3} className="">
                        <strong>40</strong><br/>
                        <span>Our Branches</span>
                    </Col>

                </Row>
            </Container>

    );
}

export default SectionCounter;