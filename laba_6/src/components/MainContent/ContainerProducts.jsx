import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineEye, BiHeart, GiShoppingBag, HiArrowNarrowRight} from "react-icons/all";

function ContainerProducts(props) {
    return (
        <div className="container__products container_margin">
            <Container>
                <Row>
                    <Col className="heading__section text-center">
                        <span className="subheading">Our Delightful offerings</span>
                        <h2>Tastefully Yours</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={3} className="d-flex align-items-baseline">
                        <div className="product">
                            {/*img d-flex align-items-center justify-content-center*/}
                            <div className="product__img product-1 img">
                                <div className="desc d-flex justify-content-center align-items-center">
                                    <a href="/"><GiShoppingBag/></a>
                                    <a href="/"><BiHeart/></a>
                                    <a href="/"><AiOutlineEye/></a>
                                </div>
                            </div>
                            {/*<span>Sale</span>*/}
                            {/*img d-flex align-items-center justify-content-center*/}
                            <div className="product__text text-center">
                                <span className="category">Brandy</span>
                                <h2>Bacardi 151</h2>
                                <span className="price price-sale">$69.00 </span>
                                <span className="price">$49.00</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="d-flex align-items-baseline">
                        <div className="product">
                            <div className="product__img product-2 img">
                                <div className="desc d-flex justify-content-center align-items-center">
                                    <a href="/"><GiShoppingBag/></a>
                                    <a href="/"> <BiHeart/></a>
                                    <a href="/"><AiOutlineEye/></a>
                                </div>
                            </div>
                            {/*<span>Best Seller</span>*/}
                            <div className="product__text text-center">
                                <span className="category">Gin</span>
                                <h2>Jim Beam Kentucky Straight</h2>
                                {/*<span className="price price-sale">$69.00</span>*/}
                                <span className="price">$69.00</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="d-flex d-flex align-items-baseline">
                        <div className="product">
                            <div className="product__img product-3 img">
                                <div className="desc d-flex justify-content-center align-items-center">
                                    <a href="/"><GiShoppingBag/></a>
                                    <a href="/"><BiHeart/></a>
                                    <a href="/"><AiOutlineEye/></a>
                                </div>
                            </div>
                            {/*<span>New Arrival</span>*/}
                            <div className="product__text text-center">
                                <span className="category">Rum</span>
                                <h2>Citadelle</h2>
                                <span className="price">$69.00</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="d-flex align-items-baseline">
                        <div className="product">
                            <div className="product__img product-4 img">
                                <div className="desc d-flex justify-content-center align-items-center">
                                    <a href="/"><GiShoppingBag/></a>
                                    <a href="/"><BiHeart/></a>
                                    <a href="/"><AiOutlineEye/></a>
                                </div>
                            </div>
                            <div className="product__text text-center">
                                <span className="category">Rum</span>
                                <h2>The Glenlivet</h2>
                                <span className="price">$69.00</span>
                            </div>
                        </div>
                    </Col>


                    <Col md={3} className="d-flex align-items-baseline">
                        <div className="product">
                            <div className="product__img product-5 img">
                                <div className="desc d-flex justify-content-center align-items-center">
                                    <a href="/"><GiShoppingBag/></a>
                                    <a href="/"><BiHeart/></a>
                                    <a href="/"><AiOutlineEye/></a>
                                </div>
                            </div>
                            <div className="product__text text-center">
                                <span className="category">Whiskey</span>
                                <h2>Black Label</h2>
                                <span className="price">$69.00</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="d-flex align-items-baseline">
                        <div className="product">
                            <div className="product__img product-6 img">
                                <div className="desc d-flex justify-content-center align-items-center">
                                    <a href="/"><GiShoppingBag/></a>
                                    <a href="/"><BiHeart/></a>
                                    <a href="/"><AiOutlineEye/></a>
                                </div>
                            </div>
                            <div className="product__text text-center">
                                <span className="category">Tequila</span>
                                <h2>Macallan</h2>
                                <span className="price">$69.00</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="d-flex align-items-baseline">
                        <div className="product">
                            <div className="product__img product-7 img">
                                <div className="desc d-flex justify-content-center align-items-center">
                                    <a href="/"><GiShoppingBag/></a>
                                    <a href="/"><BiHeart/></a>
                                    <a href="/"><AiOutlineEye/></a>
                                </div>
                            </div>
                            <div className="product__text text-center">
                                <span className="category">Vodka</span>
                                <h2>Old Monk</h2>
                                <span className="price">$69.00</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="d-flex align-items-baseline">
                        <div className="product">
                            <div className="product__img product-8 img">
                                <div className="desc d-flex justify-content-center align-items-center">
                                    <a href="/"><GiShoppingBag/></a>
                                    <a href="/"><BiHeart/></a>
                                    <a href="/"><AiOutlineEye/></a>
                                </div>
                            </div>
                            <div className="product__text text-center">
                                <span className="category">Whiskey</span>
                                <h2>Jameson Irish Whiskey</h2>
                                <span className="price">$69.00</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <a className="view-all-products btn" href="/">View All Products <HiArrowNarrowRight/></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContainerProducts;