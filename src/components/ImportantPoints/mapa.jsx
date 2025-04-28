import React, { useState } from 'react';

const pontos = [
  // PONTOS DE ENCONTRO
  { id: 'PE01', tipo: 'ponto-encontro', x: '18%', y: '10%' },
  { id: 'PE02', tipo: 'ponto-encontro', x: '22%', y: '18%' },
  { id: 'PE03', tipo: 'ponto-encontro', x: '26%', y: '24%' },
  { id: 'PE04', tipo: 'ponto-encontro', x: '30%', y: '30%' },
  { id: 'PE05', tipo: 'ponto-encontro', x: '35%', y: '36%' },
  { id: 'PE06', tipo: 'ponto-encontro', x: '40%', y: '42%' },
  { id: 'PE07', tipo: 'ponto-encontro', x: '45%', y: '47%' },
  { id: 'PE08', tipo: 'ponto-encontro', x: '48%', y: '52%' },
  { id: 'PE09', tipo: 'ponto-encontro', x: '52%', y: '57%' },
  { id: 'PE10', tipo: 'ponto-encontro', x: '55%', y: '62%' },
  { id: 'PE11', tipo: 'ponto-encontro', x: '58%', y: '66%' },
  { id: 'PE12', tipo: 'ponto-encontro', x: '61%', y: '69%' },
  { id: 'PE13', tipo: 'ponto-encontro', x: '64%', y: '72%' },
  { id: 'PE14', tipo: 'ponto-encontro', x: '68%', y: '75%' },

  // REFERÊNCIAS 1-33
  { id: '01', tipo: 'referencia', x: '20%', y: '12%' },
  { id: '02', tipo: 'referencia', x: '24%', y: '16%' },
  { id: '03', tipo: 'referencia', x: '28%', y: '22%' },
  { id: '04', tipo: 'referencia', x: '32%', y: '28%' },
  { id: '05', tipo: 'referencia', x: '37%', y: '34%' },
  { id: '06', tipo: 'referencia', x: '42%', y: '40%' },
  { id: '07', tipo: 'referencia', x: '47%', y: '45%' },
  { id: '08', tipo: 'referencia', x: '50%', y: '50%' },
  { id: '09', tipo: 'referencia', x: '54%', y: '55%' },
  { id: '10', tipo: 'referencia', x: '58%', y: '59%' },
  { id: '11', tipo: 'referencia', x: '61%', y: '63%' },
  { id: '12', tipo: 'referencia', x: '64%', y: '66%' },
  { id: '13', tipo: 'referencia', x: '67%', y: '69%' },
  { id: '14', tipo: 'referencia', x: '70%', y: '72%' },
  { id: '15', tipo: 'referencia', x: '72%', y: '75%' },
  { id: '16', tipo: 'referencia', x: '74%', y: '77%' },
  { id: '17', tipo: 'referencia', x: '76%', y: '80%' },
  { id: '18', tipo: 'referencia', x: '78%', y: '82%' },
  { id: '19', tipo: 'referencia', x: '80%', y: '84%' },
  { id: '20', tipo: 'referencia', x: '82%', y: '86%' },
  { id: '21', tipo: 'referencia', x: '84%', y: '88%' },
  { id: '22', tipo: 'referencia', x: '86%', y: '90%' },
  { id: '23', tipo: 'referencia', x: '88%', y: '92%' },
  { id: '24', tipo: 'referencia', x: '90%', y: '94%' },
  { id: '25', tipo: 'referencia', x: '92%', y: '96%' },
  { id: '26', tipo: 'referencia', x: '94%', y: '97%' },
  { id: '27', tipo: 'referencia', x: '96%', y: '98%' },
  { id: '28', tipo: 'referencia', x: '97%', y: '99%' },
  { id: '29', tipo: 'referencia', x: '95%', y: '100%' },
  { id: '30', tipo: 'referencia', x: '93%', y: '98%' },
  { id: '31', tipo: 'referencia', x: '91%', y: '96%' },
  { id: '32', tipo: 'referencia', x: '89%', y: '94%' },
  { id: '33', tipo: 'referencia', x: '87%', y: '92%' },
];

export default function Mapa() {
  const [ativo, setAtivo] = useState(null);

  return (
    <div className="flex justify-center mt-10 space-x-10">
      <div className="relative w-[600px] h-[800px] bg-gray-900 rounded-lg shadow-lg border overflow-hidden">

        {/* DESENHO DOS PRÉDIOS */}
        <div className="absolute bg-gray-600 rounded-md" style={{ width: '80px', height: '60px', left: '18%', top: '15%' }} />
        <div className="absolute bg-gray-600 rounded-md" style={{ width: '100px', height: '70px', left: '40%', top: '30%' }} />
        <div className="absolute bg-gray-600 rounded-md" style={{ width: '120px', height: '60px', left: '62%', top: '50%' }} />
        <div className="absolute bg-gray-600 rounded-md" style={{ width: '140px', height: '80px', left: '70%', top: '70%' }} />

        {/* CERCA */}
        <svg className="absolute w-full h-full" style={{ pointerEvents: 'none' }}>
          {/* Cercas desenhadas com linhas */}
          <line x1="10%" y1="5%" x2="90%" y2="5%" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="90%" y1="5%" x2="90%" y2="95%" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="90%" y1="95%" x2="10%" y2="95%" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="10%" y1="95%" x2="10%" y2="5%" stroke="white" strokeWidth="2" strokeDasharray="5,5" />

          {/* Caminhos desenhados */}
          <path d="M18% 10% C22% 15%, 26% 20%, 30% 30%" stroke="#00ff00" strokeWidth="2" fill="none" />
          <path d="M30% 30% C35% 35%, 40% 40%, 45% 47%" stroke="#00ff00" strokeWidth="2" fill="none" />
          <path d="M45% 47% C50% 50%, 55% 55%, 58% 66%" stroke="#00ff00" strokeWidth="2" fill="none" />
          {/* você pode adicionar mais caminhos aqui */}
        </svg>

        {/* PONTOS */}
        {pontos.map((ponto) => (
          <div
            key={ponto.id}
            onClick={() => setAtivo(ponto)}
            className={`absolute cursor-pointer text-white text-xs font-bold flex items-center justify-center 
              ${ponto.tipo === 'ponto-encontro' ? 'bg-green-600' : 'bg-red-600'}
              w-6 h-6 rounded-full hover:scale-110 transition-all`}
            style={{
              left: ponto.x,
              top: ponto.y,
              transform: 'translate(-50%, -50%)',
            }}
            title={ponto.id}
          >
            {ponto.tipo === 'ponto-encontro' ? ponto.id.replace('PE', '') : ponto.id}
          </div>
        ))}

        {/* INFORMAÇÕES DO PONTO */}
        {ativo && (
          <div className="absolute bottom-0 left-0 w-full bg-white/90 text-gray-800 p-2 text-sm border-t border-gray-300">
            <strong>{ativo.id}</strong> - {ativo.tipo === 'ponto-encontro' ? 'Ponto de Encontro' : 'Ponto de Referência'}
          </div>
        )}
      </div>
    </div>
  );
}
{/* Caminhos desenhados */}