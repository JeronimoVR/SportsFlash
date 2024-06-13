import React from "react";
import CustomAlert from "../Alerts/Alerts";
import CardAside from "../CardAside/CardAside";
import "./SportSection.css";
import AccordionComponent from "../AccordionComponent/AccordionComponent";

function SportSection({ noticias, questions }) {
    return (
        <section className="sport-section">
            <div className="video-section">
                <div className="video video-container ">
                    <iframe
                        className="video"
                        width="681"
                        height="383"
                        src="https://www.youtube.com/embed/bc8QjKhyHxw"
                        title="Game Recap: Celtics 105, Mavericks 98"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
                <CustomAlert
                    type="success"
                    message="Actualidad: Victoria de los Boston Celtics"
                />
                <AccordionComponent questions={questions} />
            </div>
            <div className="aside-cards">
                <CardAside noticias={noticias} />
            </div>
        </section>
    );
}

export default SportSection;
