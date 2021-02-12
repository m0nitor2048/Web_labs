import React from 'react';
import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, NavLink, Link} from "react-router-dom";
import AboutUs from "../../pages/AboutUs";
import Home from "../../pages/Home";
import {
    AiFillPhone,
    AiOutlineInstagram,
    AiOutlineTwitter, FaDribbble,
    FaFacebookF,
    FaTelegramPlane,
    GiShoppingBag
} from "react-icons/all";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";
import Products from "../../pages/Products";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";
import SingleProduct from "../../pages/SingleProduct";
import LogIn from "../../pages/LogIn";
import SignUp from "../../pages/SignUp";
// import Testt from "../../components/Testt";


function MainRouter(props) {
    return (
            <Router>

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
                                {/*<a className="top__bar_sign-up" href="/">SIGN UP</a>*/}
                                {/*<a className="top__bar_log-in" href="/">LOG IN</a>*/}
                                <Link exact to="/sign-up" className="top__bar_sign-up">
                                    SIGN UP
                                </Link>
                                <Link exact to="/log-in" className="top__bar_log-in">
                                    LOG IN
                                </Link>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="nav__menu">
                    <Container>
                        <Navbar>
                            <Navbar.Brand className="nav__menu_brand mr-100"
                                          href="">Liquor <span>store</span></Navbar.Brand>
                            <Nav className="ml-auto nav__menu_middle">

                                <NavLink exact to="/" activeClassName="selected" className="menu__item">
                                    Home
                                </NavLink>

                                <NavLink exact to="/about" activeClassName="selected" className="menu__item">
                                    About
                                </NavLink>


                                <NavDropdown className="menu__item" title="Products" id="collapsible-nav-dropdown">
                                    <NavLink exact to="/products" activeClassName="selected"
                                             className="menu__dropdown_item menu__dropdown_item dropdown-item">
                                            Products
                                    </NavLink>
                                    <NavLink exact to="/single_product" activeClassName="selected"
                                             className="menu__dropdown_item menu__dropdown_item dropdown-item">
                                        Single Product
                                    </NavLink>
                                    <NavLink exact to="/cart" activeClassName="selected"
                                             className="menu__dropdown_item menu__dropdown_item dropdown-item">
                                        Cart
                                    </NavLink>
                                    <NavLink exact to="/checkout" activeClassName="selected"
                                             className="menu__dropdown_item menu__dropdown_item dropdown-item">
                                        Checkout
                                    </NavLink>
                                </NavDropdown>


                                <NavLink exact to="/blog" activeClassName="selected" className="menu__item">
                                    Blog
                                </NavLink>

                                <NavLink exact to="/contact" activeClassName="selected" className="menu__item">
                                    Contact
                                </NavLink>

                                <NavLink exact to="/shopping-bag" activeClassName="selected" className="menu__item menu__shopping-bag">
                                    <GiShoppingBag/>
                                </NavLink>

                            </Nav>
                        </Navbar>
                    </Container>
                </div>
                <Switch>

                    <Route path="/sign-up">
                        <SignUp/>
                    </Route>
                    <Route path="/log-in">
                        <LogIn/>
                    </Route>


                    <Route path="/about">
                        <AboutUs/>
                    </Route>
                    <Route path="/products">
                        {/*<Testt/>*/}
                        <Products/>
                    </Route>
                    <Route path="/single_product">
                        <SingleProduct/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout/>
                    </Route>

                    <Route path="/blog">
                        <Blog/>
                    </Route>
                    <Route path="/contact">
                       <Contact/>
                    </Route>
                    <Route path="/shopping-bag">
                        <Cart/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>


    );
}

export default MainRouter;