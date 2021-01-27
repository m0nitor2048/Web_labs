import React from 'react';
import {Col, Row} from "react-bootstrap";
import product_1 from "../../images/products/prod-1.jpg";
import {IoClose} from "react-icons/all";

function CartItem(props) {
    return (
        <Row className="text-center cart__box">
            <Col md={1} className="cart__checkbox d-flex align-items-center justify-content-center">

                <label className="checkbox-wrap checkbox-primary">
                    <input type="checkbox"/>
                    <span className="checkmark"/>
                </label>

            </Col>
            <Col md={1} className="cart__img">
                <img src={product_1} className="img" alt=""/>
            </Col>
            <Col md={5} className="cart__product text-left">
                <strong>Jim Beam Kentucky Straight</strong><br/>
                <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
            </Col>
            <Col md={1} className="cart__price d-flex align-items-center justify-content-center">
                <span>$44.99</span>
            </Col>
            <Col md={2} className="cart__quantity d-flex align-items-center justify-content-center">
                <input type="number" name="quantity"
                       className="quantity form-control input-number"
                       value="2" min="1" max="100"/>
            </Col>
            <Col md={1} className="cart__total d-flex align-items-center justify-content-center">
                <span>$44.99</span>
            </Col>
            <Col md={1} className="cart__del d-flex align-items-center justify-content-center">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">
                               <IoClose/>
                            </span>
                </button>
            </Col>
        </Row>
    );
}

export default CartItem;