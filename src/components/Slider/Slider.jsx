import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Home/1.png";
import image2 from "../Home/2.png";
import image3 from "../Home/3.png";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000, // Cambia esta velocidad si es necesario
        autoplay: true, // Habilita el autoplay
        autoplaySpeed: 3000, // Cambia este valor para ajustar el intervalo entre diapositivas en milisegundos
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />, // Agrega el componente NextArrow
        prevArrow: <PrevArrow />, // Agrega el componente PrevArrow

      };

  return (
    <Slider {...settings} >
        <div>
          <img src={image2} alt="Slide 1" />
        </div>
        <div>
          <img src={image1} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
      </Slider>
  )
}

export default Slider