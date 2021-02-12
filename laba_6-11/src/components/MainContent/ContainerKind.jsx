import React from 'react';
import {Container, Row} from "react-bootstrap";

import KindItem from "../elements/KindItem";

const data = [
    {
        id: 1,
        name: "Brandy",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/web-labs-e7122.appspot.com/o/kind%2Fkind-1.jpg?alt=media&token=e2cebf47-ef84-476f-bc20-b658781d918f",
    },
    {
        id: 2,
        name: "Gin",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/web-labs-e7122.appspot.com/o/kind%2Fkind-2.jpg?alt=media&token=5c294fe3-da99-442d-9621-be4f1a595e1a",
    },
    {
        id: 3,
        name: "Rum",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/web-labs-e7122.appspot.com/o/kind%2Fkind-3.jpg?alt=media&token=4bda0b29-20c5-42db-8f29-12d0ab0bed31",
    },
    {
        id: 4,
        name: "Tequila",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/web-labs-e7122.appspot.com/o/kind%2Fkind-4.jpg?alt=media&token=cc1f9195-aeb7-4b54-ab9f-fc88e6cffdb4",
    },
    {
        id: 5,
        name: "Vodka",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/web-labs-e7122.appspot.com/o/kind%2Fkind-5.jpg?alt=media&token=905ed0be-3756-4ea1-bd2d-16144b66ad7c",
    },
    {
        id: 6,
        name: "Whiskey",
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/web-labs-e7122.appspot.com/o/kind%2Fkind-6.jpg?alt=media&token=33aaec99-82c7-404c-a171-f6ab3cadae7c",
    }
]


function ContainerKind(props) {
    return (
        <div className="container__kind container_margin">
            <Container>
                <Row>
                    {data.map(({id, name, imageUrl}) => (
                        <KindItem
                            key={id}
                            name={name}
                            imageUrl={imageUrl}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ContainerKind;