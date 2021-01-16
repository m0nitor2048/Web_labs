import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {GiShoppingBag} from "react-icons/all";

function HeaderMenu(props) {
    return (

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
    );
}

export default HeaderMenu;