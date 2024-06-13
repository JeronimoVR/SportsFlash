import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ControlledCarousel.css";

function ControlledCarousel({ title4, title5, title6, text4, text5, text6}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            
            {/* Carrusel para News */}

            <Carousel.Item>
                <img
                    className="home-image-carousel d-block w-100"
                    src="https://caracoltv.brightspotcdn.com/dims4/default/d133075/2147483647/strip/true/crop/1000x498+0+84/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Ff8%2Fdc%2F2240cedb4cf1bf7f853347437bea%2Fegan-bernal-ineos-grenadiers-carrera-ciclista-colombiano.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>{title4}</h3>
                    <p>{text4}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="home-image-carousel d-block w-100"
                    src="https://caracoltv.brightspotcdn.com/dims4/default/1d3fe18/2147483647/strip/true/crop/1024x510+0+0/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fa8%2F8a%2F05a5e8b448bc95b9d7584a86c438%2Fgettyimages-2148443926.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>{title5}</h3>
                    <p>{text5}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="home-image-carousel d-block w-100"
                    src="https://caracoltv.brightspotcdn.com/dims4/default/75001e1/2147483647/strip/true/crop/762x379+0+5/resize/840x418!/format/webp/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Ff4%2F31%2F695d33f54680898ef8246faf37fa%2Fmaria-jose-uribe.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>{title6}</h3>
                    <p>{text6}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
