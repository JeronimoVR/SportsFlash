import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ControlledCarousel.css";

function ControlledCarousel({
    title1,
    title2,
    title3,
    text1,
    text2,
    text3,
    image1,
    image2,
    image3,
}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="home-image-carousel d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{title1}</h3>
                    <p>{text1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="home-image-carousel d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>{title2}</h3>
                    <p>{text2}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="home-image-carousel d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>{title3}</h3>
                    <p>{text3}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
