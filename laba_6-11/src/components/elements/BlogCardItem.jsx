import React from 'react';
import {Col} from "react-bootstrap";
import {FaRegCalendarAlt, HiArrowNarrowRight} from "react-icons/all";


const BlogCardItem = ({data = "No Data", title = "No Title",
                          description = "No Description", imageSrc, url="#"}) => (

        <Col md={6} className="d-flex mb-5">
            <a className="img blog_img" href={url} style={{backgroundImage: `url(${imageSrc})`}}/>
            <div className="blog__card_text">
                <p className="blog__card_data"><FaRegCalendarAlt className="mr-3"/>{data}</p>
                <h3 className="mb-3">
                    <a href={url}>{title}</a>
                </h3>
                <p>{description}</p>
                <a className="font-weight-bold mb-3" href={url}>Continue <HiArrowNarrowRight/></a>
            </div>
        </Col>

);


export default BlogCardItem;