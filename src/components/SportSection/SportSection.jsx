import React from "react";
import CustomAlert from "../Alerts/Alerts";
import CardAside from "../CardAside/CardAside";
import "./SportSection.css";
import AccordionComponent from "../AccordionComponent/AccordionComponent";

function SportSection({ noticias, questions,urlVideo,titleVideo,typeAlert, messageAlert,titleSection}) {
    return (
        <section className="sport-section">
            <div className="video-section">
                <div className="video video-container ">
                    <iframe
                        className="video"
                        width="681"
                        height="383"
                        src={urlVideo}
                        title={titleVideo}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
                <CustomAlert
                    type={typeAlert}
                    message={messageAlert}
                />
                <AccordionComponent questions={questions} />
            </div>
            <div className="aside-cards">
                <CardAside noticias={noticias} titleSection={titleSection}/>
            </div>
        </section>
    );
}

export default SportSection;
