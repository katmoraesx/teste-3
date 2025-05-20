import { useState } from 'react';

const dados = {
  'Tecnologia da Informação': [
    { sigla: 'SO', significado: 'Service Solutions' },
    { sigla: 'GS', significado: 'Global Services' },
    { sigla: 'BD', significado: 'Bosch Digital' },
    { sigla: 'CS', significado: 'Commercial Service' },
    { sigla: 'PM', significado: 'Operation Management' },
    { sigla: 'PT', significado: 'Power Tools' },
    { sigla: 'CaP', significado: 'Campinas Plant' },
    { sigla: 'ETS', significado: 'Engineering Technical School' },
    { sigla: 'HRS', significado: 'Human Resource Services' },
    { sigla: 'RBLA', significado: 'Robert Bosch Latin America' },
    { sigla: 'CWW', significado: 'Center World Wide' },
    { sigla: 'SMAG', significado: 'Smart Agriculture' },
    { sigla: 'SWD', significado: 'Software Engineering Development' },
    { sigla: 'DOE1', significado: 'DevOps Engineering' },
  ]
};

export default function Siglas() {
  const [selecionada, setSelecionada] = useState(null);

  return (
    <div className="bg-white p-10 shadow-lg mx-4 md:mx-20 mt-20 text-sm rounded-lg">
      <h2 className="text-center font-bold text-xl mb-10 text-gray-800">SIGLAS</h2>
      {Object.entries(dados).map(([area, siglas]) => (
        <div key={area} className="mb-10">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">{area}</h3>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full md:w-2/3">
              {siglas.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelecionada(item)}
                  className={`py-2 px-4 rounded shadow-sm transition-all duration-300
                    ${selecionada?.sigla === item.sigla
                      ? 'bg-teal-600 text-white font-bold'
                      : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100'
                    }`}
                >
                  {item.sigla}
                </button>
              ))}
            </div>
            <div className="w-full md:w-1/3 bg-teal-600 text-white p-6 rounded shadow text-center font-bold transition-all duration-300">
              {selecionada ? (
                <>
                  <p className="text-3xl mb-2">{selecionada.sigla}</p>
                  <p className="text-base">{selecionada.significado}</p>
                </>
              ) : (
                <p className="text-sm font-normal">Clique em uma sigla para ver o significado</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
