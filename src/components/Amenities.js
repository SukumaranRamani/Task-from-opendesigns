import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage1 from './Slider 1.png';
import sliderImage2 from './Slider 2.png';
import sliderImage3 from './Slider 3.png';

const Amenities = () => {
  const [isAutoPlaying] = useState(true);

  const amenitiesData = [
    {
      image: sliderImage1,
      title: "INDOOR GAMES",
      alt: "Billiards table in modern gaming room"
    },
    {
      image: sliderImage2,
      title: "GYMNASIUM",
      alt: "Fitness center with exercise equipment"
    },
    {
      image: sliderImage3,
      title: "BANQUET HALL",
      alt: "Elegant banquet hall with red chair covers"
    }
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: "block", 
          background: "white",    
          borderRadius: "50%",
          padding: "12px",         
          width: "40px",          
          height: "40px",         
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
          cursor: "pointer",      
          zIndex: 1,
          color: "black"
        }}
        onClick={onClick}
        >
         
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: "block", 
          background: "white",    
          borderRadius: "50%",
          padding: "12px",         
          width: "40px",          
          height: "40px",         
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
          cursor: "pointer",      
          zIndex: 1,
          color: "black"
        }}
        onClick={onClick}
        >
          
        </div>
    );
  }

  const settings = {
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: isAutoPlaying,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="amenities-container">
      <h1 className="amenities-title">KEY AMENITIES</h1>
      <p className="amenities-subtitle">
        Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        Class aptent taciti sociosqu ad litora toria nostra, per inceptos himenaeos.
      </p>

      <div className="slider-container">
        <Slider {...settings}>
          {amenitiesData.map((amenity, index) => (
            <div key={index} className="slide-item">
              <div className="image-wrapper">
                <img src={amenity.image} alt={amenity.alt} />
                <h3 className="amenity-title">{amenity.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Amenities;
