import React from 'react';
import {Col} from "react-bootstrap";


const KindItem = ({name, imageUrl}) => (

    <Col className="kind__box" md={2} lg={2}>
        <div className="circle img" style={{backgroundImage: `url(${imageUrl})`}}/>
        <h3>{name}</h3>
    </Col>
)

export default KindItem;