import React from 'react';
import {Col, Row} from "react-bootstrap";
// import {ReactComponent as SupportSVG} from "../../images/support.svg";



const AdvantagesCardItem = ({title="No Title", text="No Text", bgColor, imageSrc}) => (

    <Col className="advantages__card" style={{ backgroundColor: {bgColor}}}>
        <Row>
            <Col className="advantages__card_img" >
                {/*style={{ backgroundImage: {imageSrc}}}*/}
                {/*<img src={support} alt="support" />*/}
                {/*<SupportSVG/>*/}
            </Col>
            <Col className="advantages__card_text">
                <h2>{title}</h2>
                <p>{text}</p>
            </Col>
        </Row>
    </Col>

);


export default AdvantagesCardItem;