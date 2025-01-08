
import React from 'react';

const LoadButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
      Cargar Sección
    </button>
  );
};

export default LoadButton;
