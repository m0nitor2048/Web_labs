import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

// import product_1 from "../images/products/prod-1.jpg";
// import product_2 from "../images/products/prod-2.jpg";
// import product_3 from "../images/products/prod-3.jpg";
// import product_4 from "../images/products/prod-4.jpg";
// import {IoClose} from "react-icons/all";
import CartItem from "../components/elements/CartItem";

function Cart(props) {
    return (
        <>
            <div className="title__element header_bg ">
                <div className="title__element_title justify-content-center align-self-center h-100 d-flex">
                    <h2 className="text-capitalize ">My Cart</h2>
                </div>
            </div>
            <Container>
                <Row className="text-center cart-primary">
                    <Col md={1}/>
                    <Col md={1}/>
                    <Col md={5}>Product</Col>
                    <Col md={1}>Price</Col>
                    <Col md={2}>Quantity</Col>
                    <Col md={1} className="d-flex align-items-center justify-content-center">Total</Col>
                    <Col md={1}/>
                </Row>
            </Container>
            <Container>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </Container>


            <Container>
                <Row className="justify-content-end">
                    <Col md={6} className="mt-5 cart-wrap">
                        <div className="cart-total mb-3">
                            <h3>Cart Totals</h3>
                            <p className="d-flex">
                                <span>Subtotal</span>
                                <span>$20.60</span>
                            </p>
                            <p className="d-flex">
                                <span>Delivery</span>
                                <span>$0.00</span>
                            </p>
                            <p className="d-flex">
                                <span>Discount</span>
                                <span>$3.00</span>
                            </p>
                            <hr/>
                            <p className="d-flex total-price">
                                <span>Total</span>
                                <span>$17.60</span>
                            </p>
                        </div>
                        <p className="text-center checkout-button">
                            <a href="#checkout.html" className="btn btn-primary py-3 px-4 ">
                                Proceed to Checkout</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Cart;