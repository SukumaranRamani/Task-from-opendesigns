// components/Layout.jsx
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="container-fluid">
          {/* Your website content here */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* Navigation content */}
          </nav>
          
          <main className="row">
            {/* Main content */}
          </main>
        </div>
      )}
    </>
  );
};

export default Layout;
