import React, {Component} from 'react'
//import logo from './images/logo.svg';

import {Navbar, Nav, Container, Row, Col, NavDropdown} from "react-bootstrap";
import {
    AiFillHeart,
    AiFillPhone, AiOutlineEye,
    AiOutlineInstagram,
    AiOutlineTwitter, BiHeart,
    FaDribbble,
    FaFacebookF, FaQuoteLeft,
    FaTelegramPlane, GiShoppingBag, HiArrowNarrowRight
} from "react-icons/all";

// -- images
//import support from './images/support.svg';
import {ReactComponent as SupportSVG} from './images/support.svg';
import {ReactComponent as CashbackSVG} from './images/cashback.svg';
import {ReactComponent as FreeDeliverySVG} from './images/free_delivery.svg';

// TODO: add images

//import aboutIMG from './images/about.jpg';
// import {ReactComponent as AboutIMG} from './images/about.jpg';


function App() {
    return (
        //AiFillPhone
        // FaTelegramPlane

        //FaFacebookF
        //AiOutlineTwitter
        //AiOutlineInstagram
        //FaDribbble

        //GiShoppingBag

        //ImMap

        <div className="App-root">

            <header>


                <div className="top__bar">
                    <Container>
                        <Row className="top__bar">
                            <Col className="top__bar_contacts align-middle" md={3} sm={5} xs={6}>
                                <a href="/"><AiFillPhone/>+00 1234 567</a>
                                <a href="/"><FaTelegramPlane/>youremail@email.com</a>
                            </Col>
                            <Col className="top__bar_reg justify-content-end" md={{span: 3, offset: 6}}
                                 sm={{span: 5, offset: 2}} xs={{span: 6, offset: 0}}>
                                <a href="/"><FaFacebookF/></a>
                                <a href="/"><AiOutlineTwitter/></a>
                                <a href="/"><AiOutlineInstagram/></a>
                                <a href="/"><FaDribbble/></a>
                                <a className="top__bar_sign-up" href="/">SIGN UP</a>
                                <a className="top__bar_log-in" href="/">LOG IN</a>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className="nav__menu">
                    <Container>
                        <Navbar>
                            <Navbar.Brand className="nav__menu_brand mr-100"
                                          href="#home">Liquor <span>store</span></Navbar.Brand>
                            <Nav className="ml-auto nav__menu_middle">
                                <Nav.Link className="menu__item" href="#home">Home</Nav.Link>
                                <Nav.Link className="menu__item" href="#about">About</Nav.Link>
                                <NavDropdown className="menu__item" title="Products" id="collasible-nav-dropdown">
                                    <NavDropdown.Item className="menu__dropdown_item"
                                                      href="#action/3.1">Products</NavDropdown.Item>
                                    <NavDropdown.Item className="menu__dropdown_item" href="#action/3.2">Single
                                        Product</NavDropdown.Item>
                                    <NavDropdown.Item className="menu__dropdown_item"
                                                      href="#action/3.3">Cart</NavDropdown.Item>
                                    <NavDropdown.Item className="menu__dropdown_item"
                                                      href="#action/3.4">Checkout</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className="menu__item" href="#blog">Blog</Nav.Link>
                                <Nav.Link className="menu__item" href="#contact">Contact</Nav.Link>
                                <Nav.Link className="menu__item menu__shopping-bag"
                                          href="#shopping-bag"><GiShoppingBag/></Nav.Link>
                            </Nav>
                        </Navbar>
                    </Container>
                </div>

                <Container>
                    <div className="title__box">
                        <h1 className="title">Good <span>Drink</span> for Good <br/><span>Moments</span></h1>
                        <button className="title__button" type="button" onClick={console.log("OK")}>
                            Shop Now
                        </button>
                        <button className="title__button title__button_read-more" type="button"
                                onClick={console.log("OK")}>
                            Read more
                        </button>
                    </div>

                </Container>
            </header>

            {/*ctrl + alt + L*/}
            {/*ctrl + alt + T*/}

            <div className="container__advantages bg_color1">
                <Container>
                    <Row>

                        <Col className="advantages__card">
                            <Row>
                                <Col className="advantages__card_img">
                                    {/*<img src={support} alt="support" />*/}
                                    <SupportSVG/>
                                </Col>
                                <Col className="advantages__card_text">
                                    <h2>Online support 24/7</h2>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia.
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                        <Col className="advantages__card bg_color2">
                            <Row>
                                <Col className="advantages__card_img">
                                    <CashbackSVG/>
                                </Col>
                                <Col className="advantages__card_text">
                                    <h2>Money back guarantee</h2>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia.
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                        <Col className="advantages__card bg_color3">
                            <Row>
                                <Col className="advantages__card_img">
                                    <FreeDeliverySVG/>
                                </Col>
                                <Col className="advantages__card_text">
                                    <h2>Free shipping & return</h2>
                                    <p>
                                        A small river named Duden flows by their place and supplies it with the
                                        necessary
                                        regelialia.
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>


            <div className="container__about">
                <Container>
                    <Row>

                        <Col className="about__image_box">
                            {/*<img src={aboutIMG} alt="about__image" />*/}
                        </Col>

                        <Col className="about__text">
                            <span className="subheading">Since 1905</span>
                            <h2>Desire Meets A New Taste</h2>
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

            <div className="container__kind">
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

            <div className="container__products">
                <Container>
                    <Row>
                        <Col className="products__title text-center">
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


            <div className="container__clients">
                <div className="overlay"></div>
                <Container>
                    <Row>
                        <Col className="clients__title text-center">
                            <span className="subheading">Testimonial</span>
                            <h2>Happy Clients</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="client__box">
                                <div className="quote text-center"><FaQuoteLeft/></div>

                                <p className="client__text">Far far away, behind the word mountains, far from the
                                    countries Vokalia and
                                    Consonantia, there live the blind texts.</p>
                                <div className="client__bio d-flex align-items-center">
                                    <div className="person__img_box person-1  img"/>
                                    <p className="client__name">Roger Scott</p>
                                    <span className="client__position">
                                        Marketing Manager
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="client__box">
                                <div className="quote text-center"><FaQuoteLeft/></div>
                                <p className="client__text">Far far away, behind the word mountains, far from the
                                    countries Vokalia and
                                    Consonantia, there live the blind texts.</p>
                                <div className="client__bio d-flex align-items-center">
                                    <div className="person__img_box person-2 img"/>
                                    <p className="client__name">Roger Scott</p>
                                    <span className="client__position">
                                        Marketing Manager
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="client__box">
                                <div className="quote text-center"><FaQuoteLeft/></div>
                                <p className="client__text">Far far away, behind the word mountains, far from the
                                    countries Vokalia and
                                    Consonantia, there live the blind texts.</p>
                                <div className="client__bio d-flex align-items-center">
                                    <div className="person__img_box person-3 img"/>
                                    <p className="client__name">
                                        Roger Scott
                                        <br/>
                                        <span className="client__position">
                                        Marketing Manager
                                    </span>
                                    </p>
                                    {/*<span className="client__position">*/}
                                    {/*    Marketing Manager*/}
                                    {/*</span>*/}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <p className="footer__copyright">Copyright ©2020 All rights reserved | This template is made with <AiFillHeart/> by Colorlib.com</p>
                        </Col>
                    </Row>
                </Container>
            </footer>


        </div>
    );
}

export default App;
