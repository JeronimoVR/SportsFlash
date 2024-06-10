import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent({cardTitle, cardText, cardButton,cardImage}) {
    return (
        <Card style={{ width: "18rem" }} className="mb-4 shadow">
            <Card.Img variant="top" src={cardImage} alt="imagen" />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                    {cardText}
                </Card.Text>
                <Button variant="primary" className="text-center">{cardButton}</Button>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;
