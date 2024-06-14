import React from "react";
import SportSection from "../../components/SportSection/SportSection";

const questions = [
    {
        header: "¿Quién ganó el Gran Premio de Canada 2024?",
        body: "El ganador del Gran Premio de Canada 2024 fue Max Verstappen, quien logró una impresionante victoria luego de una reñida batalla con George Rusell y Lando Norris.",
    },
    {
        header: "¿Cuáles son los equipos y pilotos favoritos para la temporada 2024?",
        body: "Red Bull y Ferrari son considerados los favoritos para el campeonato de constructores, gracias a su dominio en la temporada 2023. Max Verstappen y Charles Leclerc son los principales candidatos para el título de pilotos, pero pilotos como Sergio Pérez, Carlos Sainz, Lewis Hamilton y George Russell también podrían ser fuertes competidores.",
    },
    {
        header: "¿Qué jugadores jóvenes están emergiendo como futuras estrellas en el ATP Tour 2024?",
        body: "La temporada 2023 fue un gran año para las estrellas #NextGenATP, con Arthur Fils y Hamad Medjedovic consiguiendo victorias destacadas en eventos de nivel Tour.",
    },
    {
        header: "¿Quien es el jugador con mejor ranking de Colombia?",
        body: "Actualmente Daniel Galan es el jugador con mejor ranking de Colombia, ocupando el puesto 115 en el ranking ATP.",
    },
];

const noticias = [
    {
        id: 1,
        titulo: "Christian Horner: 'Necesitamos que ambos coches puntúen'",
        descripcion:
            "El directivo de Red Bull subrayó que Checo Pérez “sabe lo que está en juego” en el campeonato de equipos de la F1",
    },
    {
        id: 2,
        titulo: "El dominio de Red Bull en F1 no se acabó, pero no es igual",
        descripcion:
            "No volveremos a ver una temporada donde Red Bull gane todas las carreras del calendario aunque, todavía, tiene el mejor auto de la categoría.",
    },
    {
        id: 3,
        titulo: "F1: Ranking de pilotos luego del GP de Canadá",
        descripcion:
            "Canadá vio a Max Verstappen anotarse su 6ta victoria de la temporada en un domingo de Fórmula 1 que lo tuvo todo en el circuito Gilles Villeneuve.",
    },
];

function F1() {
    return (
        <div>
            <h2 className="h2-title magic-pattern">Formula 1</h2>
            <SportSection
                noticias={noticias}
                questions={questions}
                urlVideo={"https://www.youtube.com/embed/PhFEeDZonCk"}
                titleVideo={
                    "FÓRMULA 1. MAX VERSTAPPEN ganó el GP de CANADÁ con un CARRERÓN bajo la LLUVIA | Resumen"
                }
                typeAlert={"warning"}
                messageAlert={"Checo Pérez, sancionado con tres puestos de salida en España"}
                titleSection={"F1 2024"}
            />
        </div>
    );
}

export default F1;
