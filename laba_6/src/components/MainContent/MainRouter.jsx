import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import {GiShoppingBag} from "react-icons/all";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import SingleProduct from "../pages/SingleProduct";

function MainRouter(props) {
    return (
            <Router>
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
                    <Route path="/about">
                        <AboutUs/>
                    </Route>
                    <Route path="/products">
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