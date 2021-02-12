import React from 'react';

import HeaderTopBar from "./HeaderTopBar";
import HeaderMenuNav from "./HeaderMenuNav";
import HeaderContent from "./HeaderContent";
import {Router} from "react-router";



function Header() {
    return (

        <header className="header_bg">
          <HeaderTopBar/>
          <HeaderMenuNav/>
          <HeaderContent/>
        </header>


    );
}

export default Header;