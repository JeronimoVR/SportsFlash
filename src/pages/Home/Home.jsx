import React from "react";
import ControlledCarousel from "../../components/ControlledCarousel/ControlledCarousel";
import CardConteiner from "../../components/CardContainer";
import "./Home.css";

const cardsData = [
    {
        cardImage:
            "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0609%2Fr1343776_1296x518_5%2D2.jpg&w=1320&h=528&scale=crop&cquality=40&location=center&format=jpg",
        cardTitle:
            "¡Egan Bernal fue el mejor de los colombianos en la etapa 1 de la Vuelta a Suiza!",
        cardText:
            "El uno por uno de la Selección Colombia en la goleada sobre Estados Unidos en amistoso",
        cardButton: "Ver más",
    },
    {
        cardImage: "https://th.bing.com/th?id=OIP.HbgeVhGpIYxg-OeQghWgQwHaEJ&w=197&h=113&c=7&o=6&pid=3.1",
        cardTitle: "Fútbol Internacional: Últimas noticias de Hoy",
        cardText:
            "Southgate discute el descarte de Grealish y Maddison, mientras Gibraltar logra un empate con Gales.",
        cardButton: "Ver más",
    },

    {
        cardTitle: "Alejandra Valencia apunta a medalla en París 2024",
        cardText:
            "La arquera mexicana Alejandra Valencia tiene la mira puesta en el podio para los próximos Juegos Olímpicos.",
        cardButton: "Ver más",
    },

    {
        cardImage:
            "https://img.redbull.com/images/c_crop,x_0,y_0,h_2731,w_5462/c_fill,w_1350,h_675/q_auto,f_auto/redbullcom/2024/6/9/duvmmbyokxfnsopclojl/canadain-grand-prix-2024",
        cardTitle: "Verstappen gana en Canadá",
        cardText:
            "Verstappen vence a Norris para conseguir la victoria en un emocionante Gran Premio de Canadá en condiciones de pista mixtas",
        cardButton: "Ver más",
    },
    {
        cardImage:
            "https://cdn.nba.com/manage/2024/06/celtics-defense-game-1.jpg",
        cardTitle: "Boston Celtics vence a Dallas Mavericks",
        cardText:
            "Los Boston Celtics van por su segunda victoria de las Finales ante unos Dallas Mavericks que buscan igualar la serie.",
        cardButton: "Ver más",
    },
];

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
            <CardConteiner cardsData={cardsData} />
            {/* Video */}
        </div>
    );
}

export default Home;
