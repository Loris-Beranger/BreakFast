import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Carrousel() {

    const datas = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1302&q=80',
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1599819055803-717bba43890f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ]

    return (
        <Carousel
            autoPlay
            interval={6000}
            thumbWidht={120}
            showIndicator={false}
            >
           {datas.map(slide => (
              <div key={slide.id}>
                  <img src={slide.image} alt="homepage carousel" />
              </div> 
           ))}
        </Carousel>
    )
}

export default Carrousel;