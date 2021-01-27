import React from 'react';
import ContainerBlog from "../MainContent/ContainerBlog";

function Blog(props) {
    return (
        <div>
            <div className="title__element header_bg ">
                <div className="title__element_title justify-content-center align-self-center h-100 d-flex">
                    <h2 className="text-capitalize ">Blog</h2>
                </div>
            </div>
            <ContainerBlog/>
        </div>
    );
}

export default Blog;