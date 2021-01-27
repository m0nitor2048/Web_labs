import React from 'react';
import ContainerProducts from "../MainContent/ContainerProducts";

function Products(props) {
    return (
        <div>
            <div className="title__element header_bg ">
                <div className="title__element_title justify-content-center align-self-center h-100 d-flex">
                    <h2 className="text-capitalize ">Products</h2>
                </div>
            </div>
            <ContainerProducts/>
        </div>
    );
}

export default Products;