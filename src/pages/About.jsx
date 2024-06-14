import React from "react";
import StudentSection from "../components/StudentSection/StudentSection";
import "./About.css";
import MapSection from "../components/MapSection/MapSection";
import FormSection from "../components/FormSection/FormSection";
import AccordionComponent from "../components/AccordionComponent/AccordionComponent";

const questions = [
    
    {
        header: "¿Cómo puedo suscribirme a las noticias?",
        body: "Puedes suscribirte a nuestras noticias completando el formulario de suscripción en esta página.",
    },
    {
        header: "¿Es gratis la suscripción?",
        body: "Sí, la suscripción es completamente gratuita.",
    },
    {
        header: "¿Cómo puedo enviar sugerencias o comentarios?",
        body: "Nos encantaría escuchar tus sugerencias o comentarios. Puedes enviarlos a feedback@noticiasdeportivas.com.",
    },
    {
        header: "¿Cómo garantizamos la calidad y veracidad de nuestras noticias?",
        body: "Contamos con un equipo de periodistas profesionales y colaboradores expertos en cada deporte. Todas nuestras noticias pasan por un riguroso proceso de verificación antes de ser publicadas.",
    },
];


  

const AboutUs = () => {
    return (
      <div className="about-us">
        <h1>Sobre Nosotros</h1>
        <FormSection />
        <div className="about-us">
            <h2>Preguntas Frecuentes</h2>
        </div>
        <AccordionComponent 
        
        questions={questions} />

        <MapSection />
        <StudentSection />
      </div>
    );
  };



export default AboutUs;