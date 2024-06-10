import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ControlledCarousel.css";

function ControlledCarousel({ title1, title2, title3, text1, text2, text3 }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="home-image-carousel d-block w-100"
                    src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0608%2Fr1343454_1296x518_5%2D2.jpg&w=1256&h=502&scale=crop&cquality=40&location=center&format=jpg"
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
                    src="https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9South/f_auto/q_auto/trackside-images/2023/F1_Grand_Prix_of_Canada/1499540822  "
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
                    src="https://cdn.nba.com/manage/2024/06/brown-guarding-irving-game-1.jpg?w=1470&h=826"
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
