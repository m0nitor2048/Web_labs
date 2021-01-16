import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import person_1 from "../../images/person/person-1.jpg";
import person_2 from "../../images/person/person-2.jpg";
import person_3 from "../../images/person/person-3.jpg";
// import person_4 from "../../images/person/person-4.jpg";

import ClientCardItem from "../elements/ClientCardItem";



const data = [
    {
        text: "Far far away, behind the word mountains, far from the\n" +
            "                                countries Vokalia and\n" +
            "                                Consonantia, there live the blind texts.",
        clientName: "Roger Scott",
        clientPosition: "Marketing Manager",
        image: person_1,
    },
    {
        text: "Far far away, behind the word mountains, far from the\n" +
            "                                countries Vokalia and\n" +
            "                                Consonantia, there live the blind texts.",
        clientName: "Roger Scott",
        clientPosition: "Marketing Manager",
        image: person_2,
    },
    {
        text: "Far far away, behind the word mountains, far from the\n" +
            "                                countries Vokalia and\n" +
            "                                Consonantia, there live the blind texts.",
        clientName: "Roger Scott",
        clientPosition: "Marketing Manager",
        image: person_3,
    },

]


function ContainerClients(props) {
    return (
        <div className="container__clients">
            <div className="overlay"></div>
            <Container>
                <Row>
                    <Col className="heading__section text-center">
                        <span className="subheading">Testimonial</span>
                        <h2>Happy Clients</h2>
                    </Col>
                </Row>
                <Row>
                    {data.map(({text, clientName, clientPosition, image}, idx) => (
                        <ClientCardItem
                            text={text}
                            clientName={clientName}
                            clientPosition={clientPosition}
                            imageSrc={image}
                            id={idx}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ContainerClients;