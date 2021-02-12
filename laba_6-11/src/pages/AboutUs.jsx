import React from 'react';

import ContainerAdvantages from "../components/MainContent/ContainerAdvantages";
import ContainerAbout from "../components/MainContent/ContainerAbout";
import ContainerClients from "../components/MainContent/ContainerClients";
import ContainerStatistic from "../components/MainContent/ContainerStatistic";

function AboutUs(props) {
    return (
        <>
            <div className="title__element header_bg ">
                <div className="title__element_title justify-content-center align-self-center h-100 d-flex">
                    <h2 className="text-capitalize ">about us</h2>
                </div>
            </div>
            <ContainerAdvantages/>
            <ContainerAbout />
            <ContainerClients/>
            <ContainerStatistic/>
        </>
    );
}

export default AboutUs;