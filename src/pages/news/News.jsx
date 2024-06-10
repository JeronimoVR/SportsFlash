import React from "react";
import ControlledCarousel from "../../components/ControlledCarousel/ControlledCarouselNew";
import SportIcon from "../Sports/SportIcons";
import CardContainer from "../../components/CardContainer";
import "./News.css";

const carouselInfo = {
    title4: "Victoria de Colombia",
    text4: "El uno por uno de la Selección Colombia en la goleada sobre Estados Unidos en amistoso",
    title5: "Verstappen gana en Canada",
    text5: "Verstappen vence a Norris para conseguir la victoria en un emocionante Gran Premio de Canadá en condiciones de pista mixtas",
    title6: "Boston Celtics vence a Dallas Mavericks",
    text6: "Los Boston Celtics van por su segunda victoria de las Finales ante unos Dallas Mavericks que buscan igualar la serie.",
};

const sports = [
    { name: 'Fútbol', icon: '⚽' },
    { name: 'Tenis', icon: '🎾' },
    { name: 'F1', icon: '🏎️' },
    { name: 'MotoGP', icon: '🏍️' },
    { name: 'Baloncesto', icon: '🏀' },
];

const newsCardsData1 = [
    {
        cardImage: "https://www.marca.com/motor/formula1/gp-canada/2024/06/10/6666bb2bca4741a6308b45bf.htm",
        cardTitle: "Accidente en la Fórmula 1 estuvo cerca de terminar en tragedia: impresionantes reflejos",
        cardText: "Las duras condiciones climáticas, en el Gran Premio de Canadá, de Fórmula 1, hicieron que se presentara una situación, que, por poco, causa algo más grave.",
        cardButton: "Compartir",
    },
    {
        cardImage: "",
        cardTitle: "Fútbol Internacional: Últimas noticias de",
        cardText: "Southgate discute el descarte de Grealish y Maddison, mientras Gibraltar logra un empate con Gales.",
        cardButton: "Ver más",
    },
    {
        cardImage: "",
        cardTitle: "Alejandra Valencia apunta a medalla en París 202",
        cardText: "La arquera mexicana Alejandra Valencia tiene la mira puesta en el podio para los próximos Juegos Olímpicos.",
        cardButton: "Ver más",
    },
];

function News() {
    return (
        <div>
            {/* Carrusel */}
            <ControlledCarousel
                title4={carouselInfo.title4}
                title5={carouselInfo.title5}
                title6={carouselInfo.title6}
                text4={carouselInfo.text4}
                text5={carouselInfo.text5}
                text6={carouselInfo.text6}
            />
            {/* Iconos */}
            <div className="sports-container">
                {sports.map((sport, index) => (
                    <SportIcon key={index} name={sport.name} icon={sport.icon} />
                ))}
            </div>
            {/* Tarjetas */}
            <CardContainer cardsData={newsCardsData1} />
        </div>
    );
}

export default News;
