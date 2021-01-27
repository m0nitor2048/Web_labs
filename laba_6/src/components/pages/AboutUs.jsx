import React from 'react';

import ContainerAdvantages from "../MainContent/ContainerAdvantages";
import ContainerAbout from "../MainContent/ContainerAbout";
import ContainerClients from "../MainContent/ContainerClients";
import ContainerStatistic from "../MainContent/ContainerStatistic";

function AboutUs(props) {
    return (
        <div>
            <div className="title__element header_bg ">
                <div className="title__element_title justify-content-center align-self-center h-100 d-flex">
                    <h2 className="text-capitalize ">about us</h2>
                </div>
            </div>
            <ContainerAdvantages/>
            <ContainerAbout />
            <ContainerClients/>
            <ContainerStatistic/>
        </div>
    );
}

export default AboutUs;