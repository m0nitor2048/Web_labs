import React from 'react';
import Title from "../elements/Title";
import ContainerAdvantages from "../MainContent/ContainerAdvantages";
import ContainerAbout from "../MainContent/ContainerAbout";
import ContainerKind from "../MainContent/ContainerKind";
import ContainerProducts from "../MainContent/ContainerProducts";
import ContainerClients from "../MainContent/ContainerClients";

function AboutUs(props) {
    return (
        <div>
            <Title/>
            <ContainerAdvantages/>
            <ContainerAbout />
            <ContainerKind/>
            <ContainerClients/>
        </div>
    );
}

export default AboutUs;