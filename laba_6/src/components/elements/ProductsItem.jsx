import React from 'react';
import {AiOutlineEye, BiHeart, GiShoppingBag} from "react-icons/all";
import {Col} from "react-bootstrap";

const ProductsItem = ({category, name, imageSrc, price, oldPrice}) => (
    <Col md={3} className="d-flex align-items-baseline">
        <div className="product">

            <div className="product__img img" style={{backgroundImage: `url(${imageSrc})`}}>
                <div className="desc d-flex justify-content-center align-items-center">
                    <a href="/"><GiShoppingBag/></a>
                    <a href="/"><BiHeart/></a>
                    <a href="/"><AiOutlineEye/></a>
                </div>
            </div>

            <div className="product__text text-center">
                <span className="category">{category}</span>
                <h2>{name}</h2>
                {oldPrice ? <span className="price price-sale">{oldPrice} </span> : <span/>}
                <span className="price">{price}</span>
            </div>
        </div>
    </Col>
)


export default ProductsItem;