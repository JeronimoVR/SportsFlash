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
                    src="https://cdn.nba.com/manage/2024/06/brown-guarding-irving-game-1.jpg?w=1470&h=826"
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
                    src="https://cdn.nba.com/manage/2024/06/brown-guarding-irving-game-1.jpg?w=1470&h=826"
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
                    src="https://cdn.nba.com/manage/2024/06/brown-guarding-irving-game-1.jpg?w=1470&h=826"
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
