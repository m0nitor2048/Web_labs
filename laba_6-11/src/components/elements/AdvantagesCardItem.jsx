import React from 'react';
import {Col} from "react-bootstrap";


const AdvantagesCardItem = ({title, text, bgColor, imageSrc}) => (

            <Col md={4} className="advantages__card d-flex align-items-center w-100" style={{ backgroundColor: bgColor}}>
                <div className="advantages__card_img">
                    <img src={imageSrc} className="advantages__card_img" alt={title}/>
                </div>
                <div className="advantages__card_text">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </Col>

);


export default AdvantagesCardItem;