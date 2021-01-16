import React from 'react';

import HeaderTopBar from "./HeaderTopBar";
import HeaderMenu from "./HeaderMenu";
import HeaderContent from "./HeaderContent";
import {Router} from "react-router";


function Header() {
    return (

        <header className="header_bg">
          <HeaderTopBar/>
          <HeaderMenu/>
          <HeaderContent/>

        </header>


    );
}

export default Header;