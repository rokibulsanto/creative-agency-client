import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import item1 from '../../../images/carousel-1.png';
import item2 from '../../../images/carousel-2.png';
import item3 from '../../../images/carousel-4.png';
import { Carousel } from 'react-bootstrap';
import './MyWorks.css';


const MyWorks = () => {
    return (
        <div className="carouselContainer">
            <h2 className="works">Here are Some Of <span className="ourWork">Our Works</span></h2>
        <Carousel className="mainCarousel">
        <Carousel.Item className="carouselItem">
          <img 
            className="d-block  carouselImage"
            src={item1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img 
            className="d-block carouselImage"
            src={item2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img 
            className="d-block  carouselImage"
            src={item3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
    );
};

export default MyWorks;