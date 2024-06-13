import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

const AccordionComponent = ({ questions }) => {
    return (
        <Accordion defaultActiveKey="0">
            {questions.map((question, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{question.header}</Accordion.Header>
                    <Accordion.Body>{question.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default AccordionComponent;
