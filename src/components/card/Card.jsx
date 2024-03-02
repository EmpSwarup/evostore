import React from 'react';

const Card = ({ imageUrl, title, description, price }) => {
  return (
    <div className="w-full bg-gray-700 rounded-lg overflow-hidden shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-300">{description}</p>
        <p className="mt-2">{price}</p>
      </div>
    </div>
  );
};

export default Card;