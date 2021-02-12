import React from 'react';
import HeaderContent from "../components/Header/HeaderContent";
import ContainerAdvantages from "../components/MainContent/ContainerAdvantages";
import ContainerAbout from "../components/MainContent/ContainerAbout";
import ContainerKind from "../components/MainContent/ContainerKind";
import ContainerProducts from "../components/MainContent/ContainerProducts";
import ContainerClients from "../components/MainContent/ContainerClients";
import ContainerBlog from "../components/MainContent/ContainerBlog";

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