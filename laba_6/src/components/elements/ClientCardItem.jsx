import React from 'react';
import {Col} from "react-bootstrap";
import {FaQuoteLeft} from "react-icons/all";


const ClientCardItem = ({text, clientName, clientPosition, imageSrc}) => (

        <Col className="client__box">
                <div className="quote text-center"><FaQuoteLeft/></div>
                <p className="client__text">{text}</p>
                <div className="client__bio d-flex align-items-center">
                    <div className="person__img_box img " style={{backgroundImage: `url(${imageSrc})`}}/>
                    <div>
                        <p className="client__name">{clientName}</p>
                        <span className="client__position">{clientPosition}</span>
                    </div>
                </div>
        </Col>
)


export default ClientCardItem;