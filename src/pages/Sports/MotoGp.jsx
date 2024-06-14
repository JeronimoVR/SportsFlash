import React from "react";
import SportSection from "../../components/SportSection/SportSection";


const questions = [

    {
        header: "¿Quién ganó el Gran Premio de Italia en 2024?",
        body: "Francesco Bagnaia se llevó la victoria en el Gran Premio de Italia 2024 en el circuito de Mugello.",
    },
    {
        header: "¿Cuál fue el resultado de Jorge Martin en el Gran Premio de Portugal 2024?",
        body: "Jorge Martin obtuvo una victoria dominante en el Gran Premio de Portugal 2024.",
    },
    {
        header: "¿Qué piloto ha sorprendido en la temporada 2024 con su rendimiento?",
        body: "Maverick Viñales ha sorprendido a todos con su rendimiento en la temporada 2024, logrando varias victorias y podios con el equipo Yamaha. Viñales ha demostrado ser un piloto rápido y consistente, capaz de luchar por el título de pilotos.",
    },
    {
        header: "¿Qué circuitos debutaron en el calendario de MotoGP en 2024?",
        body: "El calendario de MotoGP 2024 vio el debut del Gran Premio de Kazajistán en el circuito Sokol International.",
    },

];

const noticias = [

    {
        id: 1,
        titulo: "David Alonso ganó en el Gran Premio de Cataluña y es el nuevo líder del Moto3",
        descripcion:
            "El piloto colombiano David Alonso logró la cuarta victoria de la temporada, tras imponer condiciones en el Gran Premio de Cataluña. Ahora, está en la cima de la general del Moto3.",
    },
    {
        id: 2,
        titulo: "Marc Márquez volverá a conducir una Ducati: el español tendrá nuevo equipo en el 2025",
        descripcion:
            "El piloto español Marc Márquez, considerado uno de los mejores en la historia del MotoGP, fue anunciado por un equipo para el próximo año. ¡Compartirá con otro multicampeón!"
    },
    {
        id:3,
        titulo: "David Alonso hizo la vuelta más rápida en la historia del GP de Cataluña del Moto3",
        descripcion:
            "Este viernes, se llevaron a cabo las prácticas libres del Gran Premio de Cataluña y el piloto colombiano David Alonso impuso un nuevo récord en esta pista, en el Moto3."
    }

];

function MotoGp() {
    return (
        <div>
            <h2 className="h2-title magic-pattern">MotoGP</h2>
            <SportSection
                noticias={noticias}
                questions={questions}
                urlVideo={"https://www.youtube.com/embed/2DL4I-bm7uU?si=MO-KmWTLX9XSg5z6"}
                titleVideo={
                    "Francesco Bagnaia se llevó la victoria en el Gran Premio de Italia 2024  | Resumen"
                }
                typeAlert={"dark"}
                messageAlert={"Francesco Bagnaia se llevó la victoria en el Gran Premio de Italia 2024"}
                titleSection={"MotoGP 2024"}
            />
        </div>
    );
}

export default MotoGp;