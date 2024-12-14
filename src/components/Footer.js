// // components/Footer.js
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// function Footer() {
//   return (
//     <footer className="bg-purple text-white py-4">
//       <Container>
//         <Row>
//           <Col md={3}>
//             <h5>About Us</h5>
//             <ul className="list-unstyled">
//               <li>Company</li>
//               <li>Team</li>
//               <li>Careers</li>
//             </ul>
//           </Col>
//           <Col md={3}>
//             <h5>Properties</h5>
//             <ul className="list-unstyled">
//               <li>Apartments</li>
//               <li>Locations</li>
//               <li>Investments</li>
//             </ul>
//           </Col>
//           <Col md={3}>
//             <h5>Contact</h5>
//             <ul className="list-unstyled">
//               <li>Email</li>
//               <li>Phone</li>
//               <li>Address</li>
//             </ul>
//           </Col>
//           <Col md={3}>
//             <h5>Follow Us</h5>
//             <ul className="list-unstyled">
//               <li>Facebook</li>
//               <li>Twitter</li>
//               <li>Instagram</li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
// import './Footer.css';

const Footer = () => {
  const locationLinks = [
    {
      id: 1,
      links: [
        'Plots in Anna Nagar West',
        'Plots in Anna Nagar East',
        'Plots in Tambaram',
        'Plots in ECR'
      ]
    },
    {
      id: 2,
      links: [
        'Plots in OMR',
        'Flats For Sale in Anna Nagar',
        'Flats Near Mogappair',
        '2bhk Apartments in Anna Nagar'
      ]
    },
    {
      id: 3,
      links: [
        '2bhk Apartments in Anna Nagar',
        'Flats Near Mogappair',
        'Plots in ECR',
        'Plots in Tambaram'
      ]
    },
    {
      id: 4,
      links: [
        'Plots in OMR',
        'Flats Near Mogappair',
        'Flats For Sale in Anna Nagar',
        '2bhk Apartments in Anna Nagar'
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="location-links">
          {locationLinks.map((column) => (
            <div key={column.id} className="link-column">
              {column.links.map((link, index) => (
                <a key={index} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            Copyright © {new Date().getFullYear()} Royal Land & Developers All Rights Reserved
          </p>
          <div className="design-by">
            Design By <span className="designer-logo">MR.SK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
