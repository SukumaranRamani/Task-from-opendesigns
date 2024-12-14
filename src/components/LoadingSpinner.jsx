import React from 'react';
import { PulseLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="loading-container d-flex justify-content-center align-items-center vh-100">
      <PulseLoader color="#36D7B7" size={15} margin={2} />
    </div>
  );
};

export default LoadingSpinner;


// Alternative loading animation styles
// import { CircleLoader, BeatLoader, ClipLoader } from 'react-spinners';

// const override = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

// <CircleLoader
//   color="#36D7B7"
//   loading={true}
//   cssOverride={override}
//   size={150}
// />
