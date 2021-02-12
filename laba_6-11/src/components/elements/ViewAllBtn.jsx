import React from 'react';
import {HiArrowNarrowRight} from "react-icons/all";

function ViewAllBtn(props) {
    return (
        <a className=" mx-auto view-all-products btn" href="/">
            View All Products
            <HiArrowNarrowRight/>
        </a>
    );
}

export default ViewAllBtn;