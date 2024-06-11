import React from "react";
import ControlledCarousel from "../../components/ControlledCarousel/ControlledCarouselNew";
import SportIcon from "../Sports/SportIcons";
import CardContainer from "../../components/CardContainer";
import ArticleComponent from "../../components/ControlledArticle/ArticleComponent";
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
        cardImage: "https://img.redbull.com/images/c_crop,x_0,y_0,h_2731,w_5462/c_fill,w_1350,h_675/q_auto,f_auto/redbullcom/2024/6/9/duvmmbyokxfnsopclojl/canadain-grand-prix-2024",
        cardSubtitle: "Fórmula 1",
        cardTitle: "Accidente en la Fórmula 1 estuvo cerca de terminar en tragedia: impresionantes reflejos",
        cardText: "Las duras condiciones climáticas, en el Gran Premio de Canadá, de Fórmula 1, hicieron que se presentara una situación, que, por poco, causa algo más grave.",
        cardButton: "Compartir",
    },
    {
        cardImage: "https://caracoltv.brightspotcdn.com/dims4/default/027b57e/2147483647/strip/true/crop/1078x536+0+0/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F97%2Fbd%2Fe2fd7c5a4b9ab5caba37f1e7ec6d%2Ftatiana-renteria-campeona-hungria-2024.jpg",
        cardSubtitle: "Deportes",
        cardTitle: "Tatiana Rentería, campeona en Hungría 2024: 'Es un sueño hecho realidad'",
        cardText: "La colombiana Tatiana Rentería se coronó campeona en la Copa del Mundo de Tiro con Arco en Hungría, ganando el oro de la categoria de 76 kilogramos, asegurandole un cupo en los juegos Olimpicos de París 2024.",
        cardButton: "Compartir",
    },
    {
        cardImage: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2024/06/09/6665e72c11141.jpeg",
        cardSubtitle: "Tenis",
        cardTitle: "Carlos Alcaraz no pierde tiempo: definió sus próximos torneos, tras ganar Roland Garros",
        cardText: "Atrás quedó el segundo Grand Slam de la temporada y también las celebraciones del título; ahora, el español Carlos Alcaraz se centra en lo que se avecina.",
        cardButton: "Compartir",
    },
    {
        cardImage: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/I3ABXFZZ3RFLFMAT45DEMHJE5A.jpg?auth=2bf655047dfb93ff204028de5d42c6c63d452d5f16e5164c7835610e64f20b89&height=553&width=830&smart=true&quality=40",
        cardSubtitle: "Baloncesto",
        cardTitle: "Los Dallas Mavericks ganaron el campeonato de la conferencia Oeste de la NBA",
        cardText: "Los Dallas Mavericks ganaron el campeonato de la conferencia Oeste de la NBA, tras vencer a los Golden State Warriors en el séptimo partido de la serie.",
        cardButton: "Compartir",
    },
    {
        cardImage: "https://canalshowsport.com.ar/wp-content/uploads/2023/09/GettyImages-1437772518.jpg",
        cardSubtitle: "Fórmula 1",
        cardTitle: "Max Verstappen gana en Canadá",
        cardText: "El piloto neerlandés Max Verstappen fue el más rápido en el Gran Premio de Emilia-Romaña, en Imola, y consiguió un registro que solo tenía Ayrton Senna. El tricampeón del mundo pasó sobre la línea de meta con un tiempo de 1 minuto, 14 segundos.",
        cardButton: "Compartir",
    },
    {
        cardImage: "https://i.dailymail.co.uk/1s/2024/06/06/01/85771555-0-image-a-44_1717632038956.jpg",
        cardSubtitle: "Deportes",
        cardTitle: "Oleksandr Usyk le quitó la corona a Tyson Fury y es el nuevo campeón absoluto de peso pesado",
        cardText: "El ucraniano Oleksandr Usyk superó a Tyson Fury y se quedó con los títulos unificados de los pesos pesados en el boxeo mundial, en Riad, Arabia Saudita.",
        cardButton: "Compartir",
    },

];

const Titulo = () => {
    return (
        <div className="banner">
            <div className="image-container">
            <img src="./images/image.jpg" alt="Flecha-Titulos" />
            </div>
            <div className="text-container">
            <h1>Fútbol</h1>
            </div>
        </div>
    );
}

const MainContent = () => (
    <main>
    <div className="main-article">
      <ArticleComponent 
        image="https://www.elespectador.com/resizer/aOSU9HJkZhMNj6clHPeGzDIHmb4=/952x637/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/VDMDVWYTNJDILNOIV3TI4AH4MQ.jpg"
        title="Noticias del fútbol profesional colombiano, resultados, posiciones y más contenidos."
        date="1 min de Lectura"
        category="FÚTBOL"
      />
    </div>
  </main>
)


    
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
            <br />
            <CardContainer cardsData={newsCardsData1} />
            <Titulo />
            {/* Fútbol */}
            <MainContent />
        </div>
    );
}

export default News;
