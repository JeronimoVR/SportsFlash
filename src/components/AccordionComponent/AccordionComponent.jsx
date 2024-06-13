import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Accordion.css";


const AccordionComponent = ({ questions }) => {
    return (
        <div className="accordion-container">
           <Accordion defaultActiveKey="0">
            {questions.map((question, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="accordion-item">
                    <Accordion.Header>{question.header}</Accordion.Header>
                    <Accordion.Body>{question.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion> 
        </div>
        
    );
};

export default AccordionComponent;
