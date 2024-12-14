import React, { useState, useEffect } from 'react';
import apartmentImage from './north.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const BoomingAreas = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const [activeTab, setActiveTab] = useState('North Chennai');

  const areas = [
    'North Chennai',
    'East Chennai',
    'West Chennai',
    'South Chennai',
    'Central Chennai'
  ];

  const areaContent = {
    'North Chennai': {
      title: 'Sorem ipsum dolor sit amet',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.'
      ],
      image: apartmentImage
    },
    'East Chennai': {
      title: 'Sorem ipsum dolor sit amet',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.'
      ],
      image: apartmentImage
    },
    'West Chennai': {
      title: 'Sorem ipsum dolor sit amet',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.'
      ],
      image: apartmentImage
    },
    'South Chennai': {
      title: 'Sorem ipsum dolor sit amet',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.'
      ],
      image: apartmentImage
    },
    'Central Chennai': {
      title: 'Sorem ipsum dolor sit amet',
      description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.'
      ],
      image: apartmentImage
    }
  };

  return (
    <div className="booming-areas-container">
      <div className="stats-banner">
      </div>

      <h1 className="main-title">BOOMING AREAS</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </p>

      <div className="tabs-container">
        {areas.map((area) => (
          <button
            key={area}
            className={`tab-button ${activeTab === area ? 'active' : ''}`}
            onClick={() => setActiveTab(area)}
          >
            {area}
          </button>
        ))}
      </div>

      <div className="content-container">
        <div className="text-content">
          <h2>{areaContent[activeTab].title}</h2>
          {areaContent[activeTab].description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="image-content">
         {(activeTab === 'North Chennai' ||
            activeTab === 'East Chennai' ||
            activeTab === 'West Chennai' ||
            activeTab === 'South Chennai' ||
            activeTab === 'Central Chennai') && (
            <div className="area-image">
              <img src={areaContent[activeTab].image} alt={activeTab} 
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    data-aos-once="true"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoomingAreas;
