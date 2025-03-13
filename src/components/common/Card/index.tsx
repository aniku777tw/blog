import React from 'react';

type CardProps = {
  children: React.ReactNode;  
};

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
      {children} 
    </div>
  );
};

export default Card;
