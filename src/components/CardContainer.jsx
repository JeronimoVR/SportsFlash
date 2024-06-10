import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "./CardComponent";

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

function CardContainer() {
   
    const rows = [];
    for (let i = 0; i < cardsData.length; i += 3) {
        rows.push(cardsData.slice(i, i + 3));
    }

    return (
        <Container>
            {rows.map((row, rowIndex) => (
                <Row key={rowIndex} className="mb-4">
                    {row.map((card, colIndex) => (
                        <Col
                            key={colIndex}
                            xs={12}
                            md={6}
                            lg={4}
                            className="mb-4"
                        >
                            <CardComponent
                                cardImage={card.cardImage}
                                cardTitle={card.cardTitle}
                                cardText={card.cardText}
                                cardButton={card.cardButton}
                            />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}

export default CardContainer;
