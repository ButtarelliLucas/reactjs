import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
// import Slider from "../Slider/Slider";

const Home = () => {
  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000, // Cambia esta velocidad si es necesario
    autoplay: true, // Habilita el autoplay
    autoplaySpeed: 3000, // Cambia este valor para ajustar el intervalo entre diapositivas en milisegundos
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home container mx-auto">
      {/* <h1>Bienvenido a la Página de Inicio</h1> */}
      <div  >
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
      {/* </Slider> */}
      </div>
    </div>
  );
};

export default Home;
