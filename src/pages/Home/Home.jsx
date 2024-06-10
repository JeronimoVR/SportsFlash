import React from "react";
import ControlledCarousel from "../../components/ControlledCarousel/ControlledCarousel";
import CardConteiner from "../../components/CardContainer";
import "./Home.css";

const carouselInfo = {
    title1: "Victoria de Colombia",
    text1: "El uno por uno de la Selección Colombia en la goleada sobre Estados Unidos en amistoso",
    title2: "Verstappen gana en Canada",
    text2: "Verstappen vence a Norris para conseguir la victoria en un emocionante Gran Premio de Canadá en condiciones de pista mixtas",
    title3: "Boston Celtics vence a Dallas Mavericks",
    text3: "Los Boston Celtics van por su segunda victoria de las Finales ante unos Dallas Mavericks que buscan igualar la serie.",
};

function Home() {
    return (
        <div>
            {/* Carrusel */}
            <ControlledCarousel
                title1={carouselInfo.title1}
                title2={carouselInfo.title2}
                title3={carouselInfo.title3}
                text1={carouselInfo.text1}
                text2={carouselInfo.text2}
                text3={carouselInfo.text3}
            />
            {/* Tarjetas */}
            <h2 className="h2-title">Más Noticias</h2>
            <CardConteiner />
            {/* Video */}
        </div>
    );
}

export default Home;
