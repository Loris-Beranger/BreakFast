import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Carrousel() {

    const datas = [
        {
            id: 1,
            image: './images/background1.jpg',
        },
        {
            id: 2,
            image: "./images/background2.jpg",
        },
    ]

    return (
        <Carousel>
           {datas.map(slide => (
              <div key={slide.id}>
                  <img src={slide.image} alt="homepage carousel" />
              </div> 
           ))}
        </Carousel>
    )
}

export default Carrousel;