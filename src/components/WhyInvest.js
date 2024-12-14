import React from 'react';
import { useEffect } from 'react';
import cropImage1 from './Frame 7.png';
import cropImage2 from './Frame 8.png';
import cropImage3 from './Frame 9.png';
import AOS from 'aos';
import 'aos/dist/aos.css';



const WhyInvest = () => {
  
  useEffect(() => {
  AOS.init();
}, []);

  const investmentPoints = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: cropImage1,
      align: 'right'
    },
    {
      id: 2,
      title: 'Qorem ipsum dolor sit amet consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: cropImage2,
      align: 'left'
    },
    {
      id: 3,
      title: 'Worem ipsum dolor sit amet consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: cropImage3,
      align: 'right'
    }
  ];

  return (
    <div className="investment-container">
      <h1 className="investment-title">WHY INVEST IN APARTMENTS?</h1>
      <p className="investment-subtitle">
      Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos himenaeos.  
      </p>

      <div className="investment-points">
        {investmentPoints.map((point) => (
          <div 
            key={point.id} 
            className={`point-card ${point.align === 'left' ? 'left-aligned' : 'right-aligned'}`}
          >
            <div className="point-content">
              <div className="image-container">
                <img
                    src={point.image} 
                    alt="no image" 
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    data-aos-once="true"
                />

              </div>
              <div className="text-container">
                <h2  data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    data-aos-once="true">{point.title}</h2>
                    
                <p  data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    data-aos-once="true">{point.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyInvest;
