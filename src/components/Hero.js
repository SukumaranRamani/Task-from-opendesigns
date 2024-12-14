import React, {useState} from 'react';
import apartmentImage from './HeroSection.png';
import apartmentImages from './Logo.png';

function Hero() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    position: 'relative'
  };
  

  const logoStyle = {
    width: '100px',
    height: '113.49px',
    padding: '8px 0 0 0',
    gap: 0,
    justifyContent: 'space-between',
    opacity: 1, 
    objectFit: 'contain',
    maxWidth: '100%'
};


  const centerImageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
    maxWidth: '100%'
  };

  return (
    <div className="entrance-container" style={containerStyle}>
      <nav className="header-nav">
        <div className="logo">
          <img 
            src={apartmentImages} 
            alt="RLD Logo" 
            style={logoStyle}
          />
        </div>
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#overview">OVERVIEW</a>
          <a href="#why-chennai">WHY CHENNAI?</a>
          <a href="#plot-benefits">PLOT BENEFITS</a>
          <button className="contact-btn"><span>Contact Us</span></button>
        </div>
      </nav>

      <div className="gate-structure">
        {/* Left card */}
        <div className="left-section">
          <div className="arch-structure">
          </div>
        </div>

        {/* Center card */}
        <div className="entrance-road">
          <div className="gate">
            <div className="gate-logo">
              <img 
                src={apartmentImage} 
                alt="RLD Gate Logo" 
                style={centerImageStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
