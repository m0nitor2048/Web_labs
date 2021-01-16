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
    FaTelegramPlane, GiShoppingBag, HiArrowNarrowRight, ImMap
} from "react-icons/all";

import Qwe from "./components/__testButtonClass";
import Header from "./components/Header/Header";


// -- images
//import support from './images/support.svg';
// import {ReactComponent as SupportSVG} from './images/support.svg';
// import {ReactComponent as CashbackSVG} from './images/cashback.svg';
// import {ReactComponent as FreeDeliverySVG} from './images/free_delivery.svg';
import ContainerAdvantages from "./components/MainContent/ContainerAdvantages";
import ContainerAbout from "./components/MainContent/ContainerAbout";
import ContainerKind from "./components/MainContent/ContainerKind";
import ContainerProducts from "./components/MainContent/ContainerProducts";
import ContainerClients from "./components/MainContent/ContainerClients";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import Title from "./components/elements/Title";
import AboutUs from "./components/pages/AboutUs";

// TODO: add images

//import aboutIMG from './images/about.jpg';
// import {ReactComponent as AboutIMG} from './images/about.jpg';


function App() {
    return (

        <div className="App-root">
            {/*<Qwe my_outline my={false} test="my_test">Nooooooo</Qwe>*/}
            {/*<Qwe test="my_test">Okkkkkkk</Qwe>*/}
            {/*ctrl + alt + L*/}
            {/*ctrl + alt + T*/}
            <Header/>
            {/*<AboutUs/>*/}
            <MainContent/>
            <Footer/>


        </div>
    );
}

export default App;
