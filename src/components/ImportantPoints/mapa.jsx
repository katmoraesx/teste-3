import React, { useState } from 'react';
import mapaBase from '../../assets/IMGmapa.jpg';


const predios = [
// a fazer

  { id: '165', tipo: 'numero-predio', x: '74.8%', y: '28%' },
  { id: '320', tipo: 'numero-predio', x: '68%', y: '27%' },
  { id: '325', tipo: 'numero-predio', x: '71%', y: '29%' },
  { id: '300', tipo: 'numero-predio', x: '60.5%', y: '69%' },

  { id: '169', tipo: 'numero-predio', x: '84.5%', y: '35.2%' },
  { id: '151', tipo: 'numero-predio', x: '60.5%', y: '69%' },
  { id: '150', tipo: 'numero-predio', x: '.5%', y: '35.2%' },
  { id: '151', tipo: 'numero-predio', x: '60.5%', y: '69%' },



// prontos 

  { id: '180', tipo: 'numero-predio', x: '72%', y: '64%' },
  { id: '183', tipo: 'numero-predio', x: '71.5%', y: '72%' },
  { id: '100', tipo: 'numero-predio', x: '67.6%', y: '66.2%' },
  { id: '106', tipo: 'numero-predio', x: '62.5%', y: '72.9%' },
  { id: '220', tipo: 'numero-predio', x: '60%', y: '79%' },
  { id: '205', tipo: 'numero-predio', x: '60%', y: '76%' },
  { id: '200', tipo: 'numero-predio', x: '56%', y: '76%' },
  { id: '204', tipo: 'numero-predio', x: '50.5%', y: '82%' },
  { id: '400', tipo: 'numero-predio', x: '40.5%', y: '84.5%' },
  { id: '551', tipo: 'numero-predio', x: '26.7%', y: '45%' },
  { id: '550', tipo: 'numero-predio', x: '24.5%', y: '54%' },
  { id: '590', tipo: 'numero-predio', x: '17%', y: '69.7%' },
  { id: '560', tipo: 'numero-predio', x: '17%', y: '74%' },
  { id: '540', tipo: 'numero-predio', x: '26.5%', y: '77%' },
  { id: '530', tipo: 'numero-predio', x: '22.5%', y: '76%' },
  { id: '600', tipo: 'numero-predio', x: '26.5%', y: '66%' },
  { id: '536', tipo: 'numero-predio', x: '23.5%', y: '68%' },
  { id: '341', tipo: 'numero-predio', x: '52%', y: '19.9%' },
  { id: '149', tipo: 'numero-predio', x: '63.5%', y: '20%' },
  { id: '140', tipo: 'numero-predio', x: '64%', y: '26%' },
  { id: '147', tipo: 'numero-predio', x: '60%', y: '16.7%' },
  { id: '148', tipo: 'numero-predio', x: '65.4%', y: '14.3%' },
  { id: '170', tipo: 'numero-predio', x: '69.5%', y: '44.5%' },
  { id: '160', tipo: 'numero-predio', x: '65%', y: '46%' },
  { id: '360', tipo: 'numero-predio', x: '52.4%', y: '52.6%' },
  { id: '370', tipo: 'numero-predio', x: '45.2%', y: '55%' },
  { id: '390', tipo: 'numero-predio', x: '34.3%', y: '37%' },
  { id: '129', tipo: 'numero-predio', x: '31%', y: '23%' }, 
  { id: '401', tipo: 'numero-predio', x: '43.8%', y: '76.5%' },
  { id: '340', tipo: 'numero-predio', x: '48%', y: '30%' },
  { id: '350', tipo: 'numero-predio', x: '43.5%', y: '33.8%' },


];

const pontos = [
  // PONTOS DE ENCONTRO

  { id: 'P.E', tipo: 'ponto-encontro', x: '18.4%', y: '62%' },   //  com ref 02
  { id: 'P.E', tipo: 'ponto-encontro', x: '25.3%', y: '80.7%' } ,// Igual ref 4
  { id: 'P.E', tipo: 'ponto-encontro', x: '34%', y: '66.5%' },   // Igual ref 5
  { id: 'P.E', tipo: 'ponto-encontro', x: '31%', y: '55.7%' } ,  // Igual ref 11
  { id: 'P.E', tipo: 'ponto-encontro', x: '41%', y: '55.7%' } ,  // Igual ref 11
  { id: 'P.E', tipo: 'ponto-encontro', x: '40.1%', y: '39%' },   // Igual ref 12
  { id: 'P.E', tipo: 'ponto-encontro', x: '48.8%', y: '74%' },    // Igual ref 15
  { id: 'P.E', tipo: 'ponto-encontro', x: '56.9%', y: '51%' },   // Igual ref 19
  { id: 'P.E', tipo: 'ponto-encontro', x: '56.4%', y: '37.2%' }, // Igual ref 20
  { id: 'P.E', tipo: 'ponto-encontro', x: '55.5%', y: '28.5%' }, // Igual ref 21
  { id: 'P.E', tipo: 'ponto-encontro', x: '63.1%', y: '61.5%' }, // Igual ref 25
  { id: 'P.E', tipo: 'ponto-encontro', x: '67.5%', y: '70.5%' }, // Igual ref 26
  { id: 'P.E', tipo: 'ponto-encontro', x: '72%', y: '40%' },     // Igual ref 30
  { id: 'P.E', tipo: 'ponto-encontro', x: '69%', y: '19.7%' } ,  // Igual ref 32


  
// PONTOS DE REFERÊNCIA certos

  { id: '01', tipo: 'referencia', x: '12%', y: '44%' },
  { id: '02', tipo: 'referencia', x: '16%', y: '62%' },
  { id: '03', tipo: 'referencia', x: '20.5%', y: '69%' },
  { id: '04', tipo: 'referencia', x: '28%', y: '83%' },
  { id: '05', tipo: 'referencia', x: '29%', y: '70%' },
  { id: '06', tipo: 'referencia', x: '25%', y: '50%' },
  { id: '07', tipo: 'referencia', x: '29%', y: '28%' },
  { id: '08', tipo: 'referencia', x: '38%', y: '82%' },
  { id: '09', tipo: 'referencia', x: '43.5%', y: '72%' },
  { id: '10', tipo: 'referencia', x: '41.8%', y: '63%' },
  { id: '11', tipo: 'referencia', x: '40.5%', y: '50%' },
  { id: '12', tipo: 'referencia', x: '39%', y: '31%' },
  { id: '13', tipo: 'referencia', x: '46.5%', y: '39.5%' },
  { id: '14', tipo: 'referencia', x: '49%', y: '56.5%' },
  { id: '15', tipo: 'referencia', x: '50.6%', y: '66.5%' },
  { id: '16', tipo: 'referencia', x: '54%', y: '84%' },
  { id: '17', tipo: 'referencia', x: '58.5%', y: '88%' },
  { id: '18', tipo: 'referencia', x: '58%', y: '70%' },
  { id: '19', tipo: 'referencia', x: '56.7%', y: '55%' },
  { id: '20', tipo: 'referencia', x: '56.4%', y: '43.2%' },
  { id: '21', tipo: 'referencia', x: '51.7%', y: '24.5%' },
  { id: '22', tipo: 'referencia', x: '58.4%', y: '24.2%' },
  { id: '23', tipo: 'referencia', x: '60.9%', y: '43.2%' },
  { id: '24', tipo: 'referencia', x: '61.9%', y: '51%' },
  { id: '25', tipo: 'referencia', x: '64.1%', y: '58%' },
  { id: '26', tipo: 'referencia', x: '67.5%', y: '74.5%' },
  { id: '27', tipo: 'referencia', x: '92.5%', y: '86.5%' },
  { id: '28', tipo: 'referencia', x: '69.8%', y: '62%' },
  { id: '29', tipo: 'referencia', x: '73.6%', y: '52%' },
  { id: '30', tipo: 'referencia', x: '71.4%', y: '36%' },
  { id: '31', tipo: 'referencia', x: '65.4%', y: '30%' },
  { id: '32', tipo: 'referencia', x: '67%', y: '22.8%' },
  { id: '33', tipo: 'referencia', x: '62.7%', y: '15.7%' }
];


export default function Mapa() {
  const [ativo, setAtivo] = useState(null);

  return (
    <div className="flex justify-center mt-10 space-x-10">
      <div
        className="relative w-full max-w-6xl aspect-[16/9] "
        style={{
          backgroundImage: `url(${mapaBase})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {predios.map((predio) => (
  <div
    key={predio.id}
    className="absolute text-black-900 font-bold text-xs bg-black-300 px-1 rounded shadow"
    style={{
      left: predio.x,
      top: predio.y,
      transform: 'translate(-50%, -50%)',
    }}
    title={`Prédio ${predio.id}`}
  >
    {predio.id}
  </div>
))}

        {/* PONTOS */}
        {pontos.map((ponto) => (
          <div
   key={ponto.id}
  onClick={() => setAtivo(ponto)}
  className={`absolute cursor-pointer text-white text-base font-medium flex items-center justify-center 
    ${ponto.tipo === 'ponto-encontro' ? 'bg-green-600 w-8 h-5 rounded-sm' : 'bg-red-700 w-6 h-6 rounded-full'}
    hover:scale-110 transition-all`}
  style={{
    left: ponto.x,
    top: ponto.y,
    transform: 'translate(-50%, -50%)',
  }}
  title={ponto.id}
>
  {ponto.tipo === 'ponto-encontro' ? ponto.id.replace('pe', '') : ponto.id}
</div>

        ))}
        {/* LEGENDA */}
        <div className="absolute bottom-13 left-12 bg-white/80 p-2 rounded shadow text-xs">
  <div className="flex items-center space-x-1 mb-1">
    <div className="w-3.5 h-3.5 rounded-full bg-red-700" />
    <span className="text-gray-800 font-medium">Ponto de Referência</span>
  </div>
  <div className="flex items-center space-x-1">
    <div className="w-5 h-3 rounded-sm bg-green-700" />
    <span className="text-gray-800 font-medium">Ponto de Encontro</span>
  </div>
</div>


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
