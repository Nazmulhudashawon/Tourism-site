import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import image1 from '../../data/Naran-Kaghan-Honeymoon-Tours.jpg';
import image2 from '../../data/16055972573b.jpg';
import image3 from '../../data/travel-world.jpg';

const Banner = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={image2} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={image3} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={image1} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
