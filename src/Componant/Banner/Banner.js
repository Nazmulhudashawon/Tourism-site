import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (

        <Carousel className="carousel">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://media.dhakatribune.com/uploads/2015/01/halong-bay.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Blog-Posts/travel/international-traveler-photographing-hot-air-balloons-over-mountainsjpg.jpg?h=350&w=674&hash=CE3BA83FF07D451913ADB0AC355F895A"
                    alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
};

export default Banner;