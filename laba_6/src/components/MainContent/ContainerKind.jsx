import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function ContainerKind(props) {
    return (
        <div className="container__kind container_margin">
            <Container>
                <Row>

                    <Col className="kind__box" md={2} lg={2}>
                        <div className="circle bg_kind_1 img">
                        </div>
                        <h3>Brandy</h3>
                    </Col>
                    <Col className="kind__box" md={2} lg={2}>
                        <div className="circle bg_kind_2 img">
                        </div>
                        <h3>Gin</h3>
                    </Col>
                    <Col className="kind__box" md={2} lg={2}>
                        <div className="circle bg_kind_3 img">
                        </div>
                        <h3>Rum</h3>
                    </Col>
                    <Col className="kind__box" md={2} lg={2}>
                        <div className="circle bg_kind_4 img">
                        </div>
                        <h3>Tequila</h3>
                    </Col>
                    <Col className="kind__box" md={2} lg={2}>
                        <div className="circle bg_kind_5 img">
                        </div>
                        <h3>Vodka</h3>
                    </Col>
                    <Col className="kind__box" md={2} lg={2}>
                        <div className="circle bg_kind_6 img">
                        </div>
                        <h3>Whiskey</h3>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default ContainerKind;