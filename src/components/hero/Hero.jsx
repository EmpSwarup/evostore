import React from 'react';
import { Spotlight } from './spotlight/Spotlight';

const Hero = () => {
  return (
    // Adjust the height for smaller screens using h-auto or a smaller fixed height, and specify a larger fixed height for md screens and up.
    <div className="h-auto md:h-[40rem] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased z-0 bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          EvoStore <br />
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Apple Authorized Reseller and Service Provider in Nepal. Buy genuine Apple products and other accessories at the best prices.
        </p>
      </div>
    </div>
  );
};

export default Hero;
