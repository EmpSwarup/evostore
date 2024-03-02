import React from 'react';

const Emi = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <div className="text-3xl font-bold sm:text-4xl">
          Buy What Your Heart Desires with EMI
        </div>
        <div className="m-4 text-lg font-normal text-base text-neutral-300 px-4">
          Buy your favourite products without putting a dent in your pocket. With EMI on credit cards now available on Evostore, you can finally buy those things that would normally put a large dent in your pocket. People shop online because it is convenient and provides them with a wide range of choices.
        </div>
      </div>

      <div className="relative inline-flex mt-6 group">
        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
        </div>
        <button
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Check options
        </button>
      </div>
    </div>
  );
}

export default Emi;
