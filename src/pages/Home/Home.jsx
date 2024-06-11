import React from "react";
import ControlledCarousel from "../../components/ControlledCarousel/ControlledCarousel";
import CardContainer from "../../components/CardContainer";
import "./Home.css";
import VideoComponent from "../../components/VideoComponent/VideoComponent";


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
        cardImage:
            "https://th.bing.com/th?id=OIP.HbgeVhGpIYxg-OeQghWgQwHaEJ&w=197&h=113&c=7&o=6&pid=3.1",
        cardTitle: "Fútbol Internacional: Últimas noticias de Hoy",
        cardText:
            "Southgate discute el descarte de Grealish y Maddison, mientras Gibraltar logra un empate con Gales.",
        cardButton: "Ver más",
    },

    {
        cardImage:
            "https://th.bing.com/th?id=OVFT.QeLpMFb4bGX_qAuodqvYXy&pid=News&w=300&h=186&c=14&rs=2&qlt=90&dpr=1.5",
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
    {
        cardImage:
            "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0610%2Fr1344252_1296x729_16%2D9.jpg&w=1140&cquality=40&format=jpg",
        cardTitle:
            "Robert Lewandowski se lesionó y encendió las alarmas en Polonia",
        cardText:
            "El propio Probierz informó en conferencia de prensa que la salida de Lewandowski, es leve, y espera que no haya problemas.",
        cardButton: "Ver más",
    },
];

const urlVideo = "https://www.espn.com.co/core/video/iframe/_/id/13769856/endcard/false";

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

function Home() {
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

            {/* Video */}
            <h2 className="h2-title">Destacados</h2>
           <VideoComponent urlVideo={urlVideo} /> 

            {/* Tarjetas */}
            <h2 className="h2-title">Más Noticias</h2>
            <CardContainer cardsData={cardsData} />
           
        </div>
    );
}

export default Home;
