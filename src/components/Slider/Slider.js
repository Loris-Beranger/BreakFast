import React, {useEffect, useState} from 'react'
import './styles.scss'
import dataSlider from './dataSlider'

export default function Slider() { 
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        console.log(slideIndex)
        if(slideIndex !== dataSlider.length){
            if (slideIndex === 4){
                console.log('test')
                setSlideIndex(1)
            }else {
                setSlideIndex(slideIndex + 1)
            }
            
        } 
        
    }
    useEffect(() => {
        setInterval(() => {
            nextSlide()
            console.log(slideIndex)
          }, 3000);
      }, []);

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={obj.image} 
                        />
                    </div>
                )
            })}
            
        </div>
    )
}