import React from "react";
import "./CardAside.css";

const CardAside = ({noticias,titleSection}) => {
    return (
        <div>
            <h2>Noticias {titleSection}</h2>
            {noticias.map((noticia) => (
                <div key={noticia.id} className="card">
                    <h3 className="title">{noticia.titulo}</h3>
                    <p className="description">{noticia.descripcion}</p>
                </div>
            ))}
        </div>
    );
};

export default CardAside;
