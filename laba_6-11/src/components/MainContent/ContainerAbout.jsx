import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function ContainerAbout(props) {
    return (
        <div className="container__about container_margin">
            <Container>
                <Row>

                    <Col className="about__image_box">
                        {/*<img src={aboutIMG} alt="about__image" />*/}
                    </Col>

                    <Col className="about__text">
                        <div className="heading__section">
                            <span className="subheading">Since 1905</span>
                            <h2>Desire Meets A New Taste</h2>
                        </div>
                        <p>
                            A small river named Duden flows by their place and supplies it with the necessary
                            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
                            your mouth.
                        </p>
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from
                            it would have been rewritten a thousand times and everything that was left from its
                            origin would be the word "and" and the Little Blind Text should turn around and return
                            to its own, safe country.
                        </p>
                        <p className="year">
                            <strong className="number">115 </strong>
                            <span>Years of Experience In Business</span>
                        </p>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default ContainerAbout;