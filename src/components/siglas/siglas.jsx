// TabelaDeSiglasESignificados.js
import React from 'react';

const TabelaDeSiglasESignificados = () => {
  return (
    <div className="bg-white p-20 shadow-lg mx-20 mt-20 text-sm">
      <h2 className="text-center font-bold">SIGLAS</h2>
      <div className="flex justify-between mt-20">
        <div className="w-3/6 grid grid-cols-5 gap-2 text-center">
          <p>• S.O</p><p>• S.O</p><p>• S.O</p><p>• S.O</p><p>• S.O</p>
          <p>• S.O</p><p>• S.O</p><p>• S.O</p><p>• S.O</p><p>• S.O</p>
          <p>• S.O</p><p>• S.O</p><p>• S.O</p><p>• S.O</p><p>• S.O</p>
        </div>
        <div className="bg-teal-600 text-white p-8 w-1/3 text-center font-bold">SIGNIFICADO</div>
      </div>
    </div>
  );
};

export default TabelaDeSiglasESignificados;
