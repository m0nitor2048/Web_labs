import React from 'react';
import HeaderContent from "../Header/HeaderContent";
import ContainerAdvantages from "../MainContent/ContainerAdvantages";
import ContainerAbout from "../MainContent/ContainerAbout";
import ContainerKind from "../MainContent/ContainerKind";
import ContainerProducts from "../MainContent/ContainerProducts";
import ContainerClients from "../MainContent/ContainerClients";
import ContainerBlog from "../MainContent/ContainerBlog";

function Home(props) {
    return (
        <div>
            <header className="header_bg">
                <HeaderContent/>
            </header>
            <ContainerAdvantages/>
            <ContainerAbout/>
            <ContainerKind/>
            <ContainerProducts/>
            <ContainerClients/>
            <ContainerBlog/>
        </div>

    );
}

export default Home;