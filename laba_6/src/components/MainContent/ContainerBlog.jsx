import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FaRegCalendarAlt, HiArrowNarrowRight} from "react-icons/all";
import blog_img_1 from '../../images/blog/image_1.jpg';
import blog_img_2 from '../../images/blog/image_2.jpg';
import blog_img_3 from '../../images/blog/image_3.jpg';
import blog_img_4 from '../../images/blog/image_4.jpg';
import BlogCardItem from "../elements/BlogCardItem";

const data = [
    {
        data: "10 September 2014",
        // title: "The Recipe from a Winemaker’s Restaurent",
        description: "A small river named Duden flows by their place and supplies it with the necessary\n" +
            "                                regelialia.",
        image: blog_img_1,
        url: "https://mail.ukr.net/",
    },
    {
        data: "23 April 2020",
        title: "The Recipe from a Winemaker’s Restaurent",
        description: "A small river named Duden flows by their place and supplies it with the necessary\n" +
            "                                regelialia.",
        image: blog_img_2,

    },
    {
        data: "20 November 2019",
        title: "The Recipe from a Winemaker’s Restaurent",
        description: "A small river named Duden flows by their place and supplies it with the necessary\n" +
            "                                regelialia.",
        image: blog_img_3,
    },
    {
        data: "23 May 2020",
        title: "The Recipe from a Winemaker’s Restaurent",
        description: "A small river named Duden flows by their place and supplies it with the necessary\n" +
            "                                regelialia.",
        image: blog_img_4,
        url: "https://www.google.com/photos",
    },
]


function ContainerBlog(props) {
    return (
        <Container className="container__blog container_margin">
            <div className="heading__section text-center mb-5">
                <span className="subheading">
                    Blog
                </span>
                <h2>Recent Blog</h2>
            </div>
            <Row>
                {data.map(({data, title, description, image, url}, idx) => (
                    <BlogCardItem
                        data={data}
                        title={title}
                        description={description}
                        imageSrc={image}
                        url={url}
                        id={idx}
                    />
                ))}
            </Row>
        </Container>


    );
}

export default ContainerBlog;