import React from 'react';
// Import the specific loader component you want to use
import { Rings } from 'react-loader-spinner';
import '../index.css';

const Spinner = () => (
  <div className="LoaderOverlay">
    <Rings
      height={100}
      width={100}
      color="#3f51b5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  </div>
);

export default Spinner;
