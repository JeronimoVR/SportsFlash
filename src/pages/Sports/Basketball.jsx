import React from "react";
import "./Sports.css";
import SportSection from "../../components/SportSection/SportSection";

const questions = [
    {
        header: "¿Cuántos campeonatos de la NBA han ganado los Boston Celtics?",
        body: "Los Boston Celtics han ganado 17 campeonatos de la NBA.",
    },
    {
        header: "¿Qué equipo ganó el primer juego de las Finales de la NBA 2024?",
        body: "Los Boston Celtics ganaron el primer juego de las Finales de la NBA 2024.",
    },
    {
        header: "¿Quién es considerado el jugador más valioso (MVP) de las Finales de la NBA 2024?",
        body: "Aún no se ha determinado el jugador más valioso (MVP) de las Finales de la NBA 2024.",
    },
    {
        header: "¿Cómo ha sido el desempeño de Jayson Tatum en las finales de 2024?",
        body: "Jayson Tatum ha tenido un buen desempeño en las finales de 2024 ayudando a los celtics",
    },
];

const noticias = [
    {
        id: 1,
        titulo: "¡Estremeciendo su casa: espectacular volcada de Tatum para Boston!",
        descripcion:
            "La figura de los Celtics voló y metió una clavada tremenda ante los Mavericks.",
    },
    {
        id: 2,
        titulo: "¡Doncic encendido en el inicio del juego ante Boston!",
        descripcion:
            "Luka arrancó con todo en ofensiva para anotar 7 puntos rápidos para los Mavericks en las Finales NBA.",
    },
    {
        id: 3,
        titulo: "Kristaps Porzingis, baja para el Juego 3 de las Finales de la NBA",
        descripcion:
            "Los Boston Celtics descartaron al pívot Kristaps Porzingis para el tercer partido de las Finales de la NBA contra los Dallas Mavericks del miércoles.",
    },
];

function Basketball() {
    return (
        <div>
            <h2 className="h2-title magic-pattern">Baloncesto</h2>
            <SportSection
                noticias={noticias}
                questions={questions}
                urlVideo={"https://www.youtube.com/embed/bc8QjKhyHxw"}
                titleVideo={"Game Recap: Celtics 105, Mavericks 98"}
                typeAlert={"success"}
                messageAlert={"Actualidad: Victoria de los Boston Celtics"}
                titleSection={"NBA 2024"}
            />
        </div>
    );
}

export default Basketball;
