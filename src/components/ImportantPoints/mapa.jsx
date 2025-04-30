import React, { useState } from 'react';
import mapaBase from '../../assets/IMGmap4.PNG';


const pontos = [
  // PONTOS DE ENCONTRO
  { id: 'pe2', tipo: 'ponto-encontro', x: '9%', y: '39%' },
  { id: 'pe4', tipo: 'ponto-encontro', x: '15%', y: '57%' },
  { id: 'pe5', tipo: 'ponto-encontro', x: '21%', y: '48%' },
  { id: 'pe10', tipo: 'ponto-encontro', x: '32.5%', y: '58%' },
  { id: 'pe12', tipo: 'ponto-encontro', x: '26%', y: '34%' },
  { id: 'pe9', tipo: 'ponto-encontro', x: '28.5%', y: '25.5%' },
  { id: 'pe15', tipo: 'ponto-encontro', x: '41%', y: '60.5%' },
  { id: 'pe21', tipo: 'ponto-encontro', x: '52%', y: '20.5%' },
  { id: 'pe169', tipo: 'ponto-encontro', x: '52.5%', y: '44%' },
  { id: 'pe300', tipo: 'ponto-encontro', x: '57.5%', y: '50%' },
  { id: 'pe25', tipo: 'ponto-encontro', x: '60.5%', y: '56%' },
  { id: 'pe100', tipo: 'ponto-encontro', x: '66.5%', y: '63%' },
  { id: 'pe30', tipo: 'ponto-encontro', x: '70%', y: '26%' },
  { id: 'pe32', tipo: 'ponto-encontro', x: '69%', y: '16.5%' },
  

  { id: '01', tipo: 'referencia', x: '3%', y: '50%' },
{ id: '02', tipo: 'referencia', x: '9.2%', y: '40%' },
{ id: '03', tipo: 'referencia', x: '13%', y: '48%' },
{ id: '04', tipo: 'referencia', x: '29%', y: '90%' },
{ id: '05', tipo: 'referencia', x: '22.5%', y: '52.5%' },
{ id: '06', tipo: 'referencia', x: '17.5%', y: '25%' },
{ id: '07', tipo: 'referencia', x: '22%', y: '20%' },
{ id: '08', tipo: 'referencia', x: '41%', y: '90%' },
{ id: '09', tipo: 'referencia', x: '29%', y: '34%' },
{ id: '10', tipo: 'referencia', x: '32%', y: '47%' },
{ id: '11', tipo: 'referencia', x: '32.5%', y: '29%' },
{ id: '12', tipo: 'referencia', x: '36%', y: '21.5%' },
{ id: '13', tipo: 'referencia', x: '38.5%', y: '36%' },
{ id: '14', tipo: 'referencia', x: '41%', y: '44%' },
{ id: '15', tipo: 'referencia', x: '45.5%', y: '57%' },
{ id: '16', tipo: 'referencia', x: '60.5%', y: '91%' },
{ id: '17', tipo: 'referencia', x: '65.5%', y: '96%' },
{ id: '18', tipo: 'referencia', x: '65.5%', y: '66%' },
{ id: '19', tipo: 'referencia', x: '63.5%', y: '42%' },
{ id: '20', tipo: 'referencia', x: '65%', y: '38%' },
{ id: '21', tipo: 'referencia', x: '62%', y: '20%' },
{ id: '22', tipo: 'referencia', x: '68%', y: '17%' },
{ id: '23', tipo: 'referencia', x: '56%', y: '33%' },
{ id: '24', tipo: 'referencia', x: '58.5%', y: '47%' },
{ id: '25', tipo: 'referencia', x: '61.5%', y: '53%' },
{ id: '26', tipo: 'referencia', x: '64.5%', y: '66%' },
{ id: '27', tipo: 'referencia', x: '95%', y: '95%' },
{ id: '28', tipo: 'referencia', x: '80%', y: '66%' },
{ id: '29', tipo: 'referencia', x: '84%', y: '53%' },
{ id: '30', tipo: 'referencia', x: '71%', y: '26.5%' },
{ id: '31', tipo: 'referencia', x: '66%', y: '17%' },
{ id: '32', tipo: 'referencia', x: '73%', y: '14%' },
{ id: '33', tipo: 'referencia', x: '70%', y: '12%' },
];

//hhfvbbs

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
        {/* PONTOS */}
        {pontos.map((ponto) => (
          <div
  key={ponto.id}
  onClick={() => setAtivo(ponto)}
  className={`absolute cursor-pointer text-white text-base font-bold flex items-center justify-center 
    ${ponto.tipo === 'ponto-encontro' ? 'bg-green-600 w-8 h-5 rounded-sm' : 'bg-red-600 w-6 h-6 rounded-full'}
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
        <div className="absolute bottom-10 left-2 bg-white/80 p-2 rounded shadow text-xs">
  <div className="flex items-center space-x-1 mb-1">
    <div className="w-3.5 h-3.5 rounded-full bg-red-600" />
    <span className="text-gray-800 font-medium">Ponto de Referência</span>
  </div>
  <div className="flex items-center space-x-1">
    <div className="w-5 h-3 rounded-sm bg-green-600" />
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
