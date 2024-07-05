import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/aquatic.css";

// Import your images
import image1 from "../images/fish1.jpg";
import image2 from "../images/fish2.jpg";
import image3 from "../images/fish3.jpg";
import image4 from "../images/fish4.jpg";
import image5 from "../images/fish5.jpg";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  const slides = [
    { src: image1, icon: "🚶‍♂️", text: "Walking" },
    { src: image2, icon: "❄️", text: "Oretenmauw Omuke trughte a otufta" },
    { src: image3, icon: "🌲", text: "Forest" },
    { src: image4, icon: "💧", text: "Water" },
    { src: image5, icon: "☀️", text: "Sun" },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.src} alt={`slide-${index}`} />
            <div className="carousel-content">
              <span className="carousel-icon">{slide.icon}</span>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
