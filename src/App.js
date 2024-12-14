import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';
import WhyInvest from './components/WhyInvest';
import BoomingAreas from './components/BoomingAreas';
import Amenities from './components/Amenities';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2631); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <Hero />
      <WhyInvest />
      <BoomingAreas />
      <Amenities />
      <Footer />
    </div>
  );
}

export default App;
