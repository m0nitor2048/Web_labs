import React from 'react';
import HeaderTopBar from "../Header/HeaderTopBar";
import HeaderMenu from "../Header/HeaderMenu";
import ContainerAbout from "../MainContent/ContainerAbout";
import ContainerAdvantages from "../MainContent/ContainerAdvantages";

function Title(props) {
    return (

        <div className="title__element header_bg ">
            <HeaderTopBar/>
            <HeaderMenu/>
            <div className="title__element_title justify-content-center align-self-center h-100 d-flex">
                <h2 className="text-capitalize ">about us</h2>
            </div>


        </div>

    );
}

export default Title;