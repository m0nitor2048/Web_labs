import React from 'react';
import {Container, Row} from "react-bootstrap";
// import {ReactComponent as SupportSVG} from "../../images/support.svg";
// import {ReactComponent as CashbackSVG} from "../../images/cashback.svg";
// import {ReactComponent as FreeDeliverySVG} from "../../images/free_delivery.svg";
import SupportSVG from "../../images/advantages/support.svg";
import CashbackSVG from "../../images/advantages/cashback.svg";
import FreeDeliverySVG from "../../images/advantages/free_delivery.svg";

import AdvantagesCardItem from "../elements/AdvantagesCardItem";


const data = [
    {
        bgColor: "#b7472a",
        image: CashbackSVG,
    },
    {
        bgColor: "#ab4227",
        image: SupportSVG,

    },
    {
        bgColor: "#a23f25",
        image: FreeDeliverySVG,

    },

]


function ContainerAdvantages(props) {
    return (
        <div className="container__advantages bg_color1">
            <Container>
                <Row>

                    {data.map(({title, text, bgColor, image}, idx) => (
                        <AdvantagesCardItem
                            title={title}
                            text={text}
                            bgColor={bgColor}
                            imageSrc={image}
                            id={idx}
                        />
                    ))}


                </Row>
            </Container>
        </div>
    );
}

export default ContainerAdvantages;