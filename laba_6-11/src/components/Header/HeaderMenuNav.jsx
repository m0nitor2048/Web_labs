import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {GiShoppingBag} from "react-icons/all";

import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import MainRouter from "../MainContent/MainRouter";

// import Home from "../../../example/src/containers/Home/Home";


function HeaderMenuNav(props) {
    return (
        <Router>
            <div className="nav__menu">

                <Container>
                    <Navbar>
                        <Navbar.Brand className="nav__menu_brand mr-100"
                                      href="">Liquor <span>store</span></Navbar.Brand>
                        <Nav className="ml-auto nav__menu_middle">

                            {/*<NavLink exact to="/" activeClassName="selected">*/}
                            <Nav.Link exact to="/" activeClassName="selected"
                                      className="menu__item" href="#home">
                                Home
                            </Nav.Link>
                            {/*</NavLink>*/}

                            {/*<NavLink exact to="/about" activeClassName="selected">*/}
                            <Nav.Link exact to="/about" activeClassName="selected"
                                      className="menu__item">
                                About
                            </Nav.Link>
                            {/*</NavLink>*/}


                            <NavDropdown className="menu__item" title="Products" id="collapsible-nav-dropdown">
                                <NavDropdown.Item className="menu__dropdown_item" href="#action/3.1">
                                    Products
                                </NavDropdown.Item>

                                    <NavDropdown.Item className="menu__dropdown_item" href="#action/3.2"
                                                      exact to="/single_product" activeClassName="selected">
                                        Single Product
                                    </NavDropdown.Item>


                                {/*<NavLink exact to="/cart" activeClassName="selected">*/}
                                    <NavDropdown.Item className="menu__dropdown_item" href="#action/3.3"
                                                      exact to="/cart" activeClassName="selected">
                                        Cart
                                    </NavDropdown.Item>
                                {/*</NavLink>*/}
                                {/*<NavLink exact to="/checkout" activeClassName="selected">*/}
                                    <NavDropdown.Item className="menu__dropdown_item" href="#action/3.4"
                                                      exact to="/checkout" activeClassName="selected">
                                        Checkout
                                    </NavDropdown.Item>
                                {/*</NavLink>*/}
                            </NavDropdown>

                            <Nav.Link exact to="/blog" activeClassName="selected" className="menu__item"
                                      href="#blog">Blog</Nav.Link>
                            <Nav.Link exact to="/contact" activeClassName="selected" className="menu__item"
                                      href="#contact">Contact</Nav.Link>
                            <Nav.Link exact to="/shopping-bag" activeClassName="selected"
                                      className="menu__item menu__shopping-bag" href="#shopping-bag">
                                <GiShoppingBag/>
                            </Nav.Link>
                        </Nav>

                    </Navbar>
                </Container>
            </div>
            <Switch>
                <Route path="/about">
                    <div>Hello it is shop</div>
                </Route>
                <Route path="/cart">
                    <div>Hello it is blog</div>
                </Route>
                <Route path="/contact">
                    <div>Hello it is contact</div>
                </Route>
                <Route path="/">
                    <div>Hello it is 111</div>
                    {/*<MainRouter />*/}
                </Route>
            </Switch>
        </Router>
    );
}

export default HeaderMenuNav;