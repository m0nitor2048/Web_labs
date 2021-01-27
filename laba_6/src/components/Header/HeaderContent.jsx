import React from 'react';
import {Container} from "react-bootstrap";

function HeaderContent(props) {
    return (
        <Container className="header_bg">
            <div className="title__box">
                <h1 className="title">Good <span>Drink</span> for Good <br/><span>Moments</span></h1>
                <button className="title__button" type="button" onClick={console.log("OK")}>
                    Shop Now
                </button>
                <button className="title__button title__button_read-more" type="button"
                        onClick={console.log("OK")}>
                    Read more
                </button>
            </div>
        </Container>
    );
}

export default HeaderContent;