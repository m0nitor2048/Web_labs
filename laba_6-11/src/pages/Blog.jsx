import React from 'react';
import ContainerBlog from "../components/MainContent/ContainerBlog";

function Blog(props) {
    return (
        <>
            <div className="title__element header_bg ">
                <div className="title__element_title justify-content-center align-self-center h-100 d-flex">
                    <h2 className="text-capitalize ">Blog</h2>
                </div>
            </div>
            <ContainerBlog/>
        </>
    );
}

export default Blog;