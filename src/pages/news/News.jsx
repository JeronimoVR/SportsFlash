import React from "react";
import ControlledCarousel from "../../components/ControlledCarousel/ControlledCarousel";
import SportIcon from "../../components/SportIcon/SportIcons";
import CardContainer from "../../components/CardContainer";
import ArticleComponent from "../../components/ControlledArticle/ArticleComponent";
import "./News.css";

const carouselInfo = [
    {
        image1: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0608%2Fr1343454_1296x518_5%2D2.jpg&w=1256&h=502&scale=crop&cquality=40&location=center&format=jpg",
        title1: "Victoria de Colombia",
        text1: "El uno por uno de la Selección Colombia en la goleada sobre Estados Unidos en amistoso",
    },
    {
        image2: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9South/f_auto/q_auto/trackside-images/2023/F1_Grand_Prix_of_Canada/1499540822",
        title2: "Verstappen gana en Canada",
        text2: "Verstappen vence a Norris para conseguir la victoria en un emocionante Gran Premio de Canadá en condiciones de pista mixtas",
    },
    {
        image3: "https://cdn.nba.com/manage/2024/06/brown-guarding-irving-game-1.jpg?w=1470&h=826",
        title3: "Boston Celtics vence a Dallas Mavericks",
        text3: "Los Boston Celtics van por su segunda victoria de las Finales ante unos Dallas Mavericks que buscan igualar la serie.",
    },
];

const sports = [
    { name: "Fútbol", icon: "⚽" },
    { name: "Tenis", icon: "🎾" },
    { name: "F1", icon: "🏎️" },
    { name: "MotoGP", icon: "🏍️" },
    { name: "Baloncesto", icon: "🏀" },
];

const newsCardsData1 = [
    {
        cardImage:
            "https://www.marca.com/motor/formula1/gp-canada/2024/06/10/6666bb2bca4741a6308b45bf.htm",
        cardTitle:
            "Accidente en la Fórmula 1 estuvo cerca de terminar en tragedia: impresionantes reflejos",
        cardText:
            "Las duras condiciones climáticas, en el Gran Premio de Canadá, de Fórmula 1, hicieron que se presentara una situación, que, por poco, causa algo más grave.",
        cardButton: "Compartir",
    },
    {
        cardImage: "",
        cardTitle: "Fútbol Internacional: Últimas noticias de",
        cardText:
            "Southgate discute el descarte de Grealish y Maddison, mientras Gibraltar logra un empate con Gales.",
        cardButton: "Ver más",
    },
    {
        cardImage: "",
        cardTitle: "Alejandra Valencia apunta a medalla en París 202",
        cardText:
            "La arquera mexicana Alejandra Valencia tiene la mira puesta en el podio para los próximos Juegos Olímpicos.",
        cardButton: "Ver más",
    },
];

function News() {
    return (
        <div>
            {/* Carrusel */}
            <ControlledCarousel
              image1={carouselInfo[0].image1}
              title1={carouselInfo[0].title1}
              text1={carouselInfo[0].text1}
              image2={carouselInfo[1].image2}
              title2={carouselInfo[1].title2}
              text2={carouselInfo[1].text2}
              image3={carouselInfo[2].image3}
              title3={carouselInfo[2].title3}
              text3={carouselInfo[2].text3}
            />
            {/* Iconos */}
            <div className="sports-container">
                {sports.map((sport, index) => (
                    <SportIcon
                        key={index}
                        name={sport.name}
                        icon={sport.icon}
                    />
                ))}
            </div>
            {/* Tarjetas */}
            <br />
            <CardContainer cardsData={newsCardsData1} />
            <Titulo />
            {/* Fútbol */}
            <MainContent />
        </div>
    );
}

export default News;
