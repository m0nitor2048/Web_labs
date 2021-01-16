import React from 'react';
import ContainerAdvantages from "./ContainerAdvantages";
import ContainerAbout from "./ContainerAbout";
import ContainerKind from "./ContainerKind";
import ContainerProducts from "./ContainerProducts";
import ContainerClients from "./ContainerClients";
import ContainerBlog from "./ContainerBlog";
import SectionCounter from "../elements/SectionCounter";

function MainContent(props) {
    return (
        <div>
            {/*<ContainerAdvantages/>*/}
            <ContainerAbout/>
            <ContainerKind/>
            <ContainerProducts/>
            <ContainerClients/>
            <ContainerBlog/>
            {/*<SectionCounter/>*/}
        </div>
    );
}

export default MainContent;