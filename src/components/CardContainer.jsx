import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "./CardComponent";

function CardContainer({cardsData}) {
   
    const rows = [];
    for (let i = 0; i < cardsData.length; i += 3) {
        rows.push(cardsData.slice(i, i + 3));
    }

    return (
        <Container>
            {rows.map((row, rowIndex) => (
                <Row key={rowIndex} className="mb-4">
                    {row.map((card, colIndex) => (
                        <Col
                            key={colIndex}
                            xs={12}
                            md={6}
                            lg={4}
                            className="mb-4"
                        >
                            <CardComponent
                                cardImage={card.cardImage}
                                cardTitle={card.cardTitle}
                                cardSubtitle={card.cardSubtitle}
                                cardText={card.cardText}
                                cardButton={card.cardButton}
                            />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}

export default CardContainer;
