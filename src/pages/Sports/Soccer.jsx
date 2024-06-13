import React from "react";
import SportSection from "../../components/SportSection/SportSection";

const questions = [
    {
        header: "¿Cuáles son los equipos favoritos para ganar la Eurocopa 2024?",
        body: " Los equipos favoritos para ganar la Eurocopa 2024 incluyen a Francia, que cuenta con un plantel lleno de estrellas, España, conocida por su estilo de juego dominante, Alemania, que juega en casa y siempre es competitiva, y Portugal, liderada por su talismán Cristiano Ronaldo.",
    },
    {
        header: "¿Quiénes son los jugadores a seguir en la Eurocopa 2024?",
        body: "Algunos de los jugadores a seguir en la Eurocopa 2024 son Kylian Mbappé de Francia, que es conocido por su velocidad y habilidades de anotación, Pedri de España, un joven talento en el medio campo, Joshua Kimmich de Alemania, que es crucial tanto en defensa como en ataque, y Bruno Fernandes de Portugal, un mediocampista creativo.",
    },
    {
        header: "¿Dónde se celebrarán los partidos de la Eurocopa 2024?",
        body: "La Eurocopa 2024 se celebrará en Alemania, con partidos distribuidos en varias ciudades importantes, incluyendo Berlín, Múnich, Dortmund, y Hamburgo. Cada ciudad ofrecerá una experiencia única para los aficionados del fútbol.",
    },
    {
        header: "¿Cómo afecta la Eurocopa 2024 al turismo en Alemania?",
        body: " La Eurocopa 2024 se espera que tenga un impacto significativo en el turismo en Alemania, atrayendo a miles de aficionados de todo el mundo. Las ciudades anfitrionas están preparándose para una afluencia de turistas, con eventos especiales, mejoras en la infraestructura y una oferta cultural enriquecida para mostrar lo mejor de Alemania.",
    },
];

const noticias = [
    {
        id: 1,
        titulo: "Euro 2024: Lo que debes saber del reglamento",
        descripcion:
            "La sustitución de los lesionados, conmoción cerebral, criterios de desempate y los temas del reglamento que hay que tener en cuenta durante el certamen europeo.",
    },
    {
        id: 2,
        titulo: "¿Alemania debe preocuparse por el ocaso de Manuel Neuer?",
        descripcion:
            "Los últimos errores del portero encendieron las alarmas, pero parece contar con toda la confianza del técnico Julian Nagelsmann para ser el titular en la Euro.",
    },
    {
        id: 3,
        titulo: "La loca historia de Mateo Retegui: salió de River, se formó en Boca, casi deja el fútbol por el hockey y jugará la Eurocopa con Italia",
        descripcion:
            "El destino es caprichoso y la odisea del ex-Tigre para llegar a La Azzurra es un concatenado de causalidades y casualidades. Diego Mazzilli, su descubridor, le contó a ESPN.com la desopilante novela.",
    },
];

function Soccer() {
    return (
        <div>
            <div>
                <h2 className="h2-title magic-pattern">Futbol</h2>
                <SportSection
                    noticias={noticias}
                    questions={questions}
                    urlVideo={"https://www.youtube.com/embed/Z9V_bTkZJg0"}
                    titleVideo={
                        "¡DOBLETE INFERNAL DE CR7 Y SHOW LUSO PREVIO A LA EURO! | Portugal 3-0 Irlanda | RESUMEN"
                    }
                    typeAlert={"info "}
                    messageAlert={"El 13 de junio comienza la Eurocopa 2024"}
                    titleSection={"Eurocopa 2024"}
                />
            </div>
        </div>
    );
}

export default Soccer;
