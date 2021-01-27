import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {HiArrowNarrowRight} from "react-icons/all";
import ProductsItem from "../elements/ProductsItem";

import product_1 from "../../images/products/prod-1.jpg";
import product_2 from "../../images/products/prod-2.jpg";
import product_3 from "../../images/products/prod-3.jpg";
import product_4 from "../../images/products/prod-4.jpg";
import product_5 from "../../images/products/prod-5.jpg";
import product_6 from "../../images/products/prod-6.jpg";
import product_7 from "../../images/products/prod-7.jpg";
import product_8 from "../../images/products/prod-8.jpg";
import product_9 from "../../images/products/prod-9.jpg";
import product_10 from "../../images/products/prod-10.jpg";
import product_11 from "../../images/products/prod-11.jpg";
import product_12 from "../../images/products/prod-12.jpg";


const data = [
    {
        category: "Brandy",
        name: "Bacardi 151",
        image: product_1,
        price: "49.00",
        oldPrice: "69.00",
    },
    {
        category: "Gin",
        name: "Jim Beam Kentucky Straight",
        image: product_2,
        price: "49.00",
    },
    {
        category: "Rum",
        name: "Citadelle",
        image: product_3,
        price: "49.00",
    },
    {
        category: "Rum",
        name: "The Glenlivet",
        image: product_4,
        price: "49.00",
    },
    {
        category: "Whiskey",
        name: "Black Label",
        image: product_5,
        price: "69.00",
    },
    {
        category: "Tequila",
        name: "Macallan",
        image: product_6,
        price: "69.00",
    },
    {
        category: "Vodka",
        name: "Old Monk",
        image: product_7,
        price: "69.00",
    },
    {
        category: "Whiskey",
        name: "Jameson Irish Whiskey",
        image: product_8,
        price: "69.00",
    },
]


function ContainerProducts(props) {
    return (
        <div className="container__products container_margin">
            <Container>
                <Row>
                    <Col className="heading__section text-center">
                        <span className="subheading">Our Delightful offerings</span>
                        <h2>Tastefully Yours</h2>
                    </Col>
                </Row>
                <Row>
                    {data.map(({category, name, image, price, oldPrice=""}, idx) => (
                        <ProductsItem
                            category={category}
                            name={name}
                            imageSrc={image}
                            price={price}
                            oldPrice={oldPrice}
                            key={idx}
                        />
                    ))}
                </Row>
                <a className="mx-auto view-all-products btn" href="/">View All Products <HiArrowNarrowRight/></a>
            </Container>
        </div>
    );
}

export default ContainerProducts;