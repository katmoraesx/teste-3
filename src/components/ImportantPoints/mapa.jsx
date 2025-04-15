import React, { useState } from 'react';
import ImportantPoints from './ImportantPoints';
import planta from '../assets/planta.jpg'; // garanta que a imagem esteja em src/assets

const pontos = [
  { id: 'PE01', tipo: 'ponto-encontro', x: '20%', y: '10%' },
  { id: 'PE02', tipo: 'ponto-encontro', x: '35%', y: '20%' },
  { id: 'R01', tipo: 'rota', x: '50%', y: '40%' },
  { id: 'PR01', tipo: 'referencia', x: '60%', y: '60%' },
];

export default function Mapa() {
  const [ativo, setAtivo] = useState(null);

  return (
    <div className="flex justify-center mt-20 space-x-10">
      <div className="relative w-1/2">
        <img src={planta} alt="Mapa da Planta" className="rounded-lg shadow-lg w-full" />
        {/* Pontos sobre a imagem */}
        {pontos.map((ponto) => (
          <div
            key={ponto.id}
            onClick={() => setAtivo(ponto)}
            className={`
              absolute cursor-pointer text-white text-xs font-bold flex items-center justify-center
              ${ponto.tipo === 'ponto-encontro' ? 'bg-red-600' :
                ponto.tipo === 'rota' ? 'bg-black' :
                'bg-blue-600'}
              w-6 h-6 rounded-full hover:scale-110 transition-all
            `}
            style={{
              left: ponto.x,
              top: ponto.y,
              transform: 'translate(-50%, -50%)'
            }}
            title={ponto.id}
          >
            {ponto.id.replace(/[^\d]/g, '')}
          </div>
        ))}
        {/* Informações sobre o ponto selecionado */}
        {ativo && (
          <div className="absolute bottom-0 left-0 w-full bg-white/80 text-gray-800 p-2 text-sm border-t border-gray-400">
            <strong>{ativo.id}</strong> - {
              ativo.tipo === 'ponto-encontro' ? 'Ponto de Encontro' :
              ativo.tipo === 'rota' ? 'Rota Principal' :
              'Ponto de Referência'
            }
          </div>
        )}
      </div>
      <ImportantPoints />
    </div>
  );
}
