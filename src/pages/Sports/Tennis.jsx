import React from "react";
import SportSection from "../../components/SportSection/SportSection";

const questions = [
    {
        header: "¿Quien es el jugador con más victorias en el 2024?",
        body: "Con un record de 64-10, Jannik Sinner es el jugador con más victorias en el 2024.",
    },
    {
        header: "Cuando se juega el siguiente Grand Slam?",
        body: "El próximo Grand Slam es Wimbledon, que se jugará del 1 al 14 de Junio de 2024.",
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
        titulo: "Jannik Sinner, el esquiador que llegó a la cima del tenis",
        descripcion:
            "Perfil del italiano menos italiano que se suma a la prestigiosa lista de líderes del ranking mundial masculino.",
    },
    {
        id: 2,
        titulo: "Bastad: la escala previa a los Juegos Olímpicos para Nadal",
        descripcion:
            "El clásico torneo sueco, una fija de la segunda gira europea sobre polvo de ladrillo, volverá a recibir al múltiple campeón español después de ¡19 años!",
    },
    {
        id: 3,
        titulo: "Wimbledon prepara un homenaje para Andy Murray",
        descripcion:
            "El torneo de Wimbledon homenajeará a Andy Murray, dos veces ganador, en la que puede ser la última participación en el Grand Slam sobre césped del británico.",
    },
];
<iframe
    width="681"
    height="383"
    src="https://www.youtube.com/embed/17gnwLKKVZ0"
    title="¡HISTÓRICO: ALCARAZ SE CONSAGRÓ EN ROLAND GARROS Y COSECHA TRES GRAND SLAMS A SUS 21 AÑOS! | RESUMEN"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
></iframe>;
function Tennis() {
    return (
        <div>
            <h2 className="h2-title magic-pattern">Tenis</h2>
            <SportSection
                noticias={noticias}
                questions={questions}
                urlVideo={"https://www.youtube.com/embed/17gnwLKKVZ0"}
                titleVideo={"¡HISTÓRICO: ALCARAZ SE CONSAGRÓ EN ROLAND GARROS Y COSECHA TRES GRAND SLAMS A SUS 21 AÑOS! | RESUMEN"}
                typeAlert={"danger "}
                messageAlert={"Oficial: Rafael Nadal no jugará Wimbledon"}
                titleSection={"ATP Tour 2024"}
            />
        </div>
    );
}

export default Tennis;
