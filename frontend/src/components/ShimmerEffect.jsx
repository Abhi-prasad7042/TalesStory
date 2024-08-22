import React from 'react';
import Header from './Header';
const ShimmerEffect = () => (

  <div className="w-full h-screen bg-black flex items-center justify-center">
    <div className="w-full max-w-[1200px] bg-gray-800 rounded-lg p-6 -mt-20">
      <div className="flex h-[350px] flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 flex flex-col mb-6 md:mb-0">
          <div className="w-full h-8 bg-gray-700 mb-4 animate-pulse"></div>
          <div className="w-full h-6 bg-gray-700 mb-4 animate-pulse"></div>
          <div className="w-full h-6 bg-gray-700 mb-4 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-700 animate-pulse"></div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[370px] h-[300px] bg-gray-600 overflow-hidden rounded-lg flex items-center justify-center relative">
            <div className="w-full h-full bg-gray-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ShimmerEffect;
