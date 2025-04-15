import { useState } from 'react';

const dados = {
  'Tecnologia da Informação': [
    { sigla: 'S.O', significado: 'Sistema Operacional' },
    { sigla: 'API', significado: 'Interface de Programação de Aplicações' },
    { sigla: 'RAM', significado: 'Memória de Acesso Aleatório' },
    { sigla: 'HD', significado: 'Disco Rígido' },
  ]
};

export default function Siglas() {
  const [selecionada, setSelecionada] = useState(null);

  return (
    <div className="bg-white p-10 shadow-lg mx-20 mt-20 text-sm rounded-lg">
      <h2 className="text-center font-bold text-lg mb-10">SIGLAS</h2>
      {Object.entries(dados).map(([area, siglas]) => (
        <div key={area} className="mb-10">
          <h3 className="text-lg font-semibold mb-4">{area}</h3>
          <div className="flex gap-10">
            <div className="grid grid-cols-2 gap-2 w-2/3">
              {siglas.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelecionada(item)}
                  className="bg-gray-100 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded shadow"
                >
                  {item.sigla}
                </button>
              ))}
            </div>
            <div className="w-1/3 bg-teal-600 text-white p-6 rounded shadow text-center font-bold">
              {selecionada ? (
                <>
                  <p className="text-2xl">{selecionada.sigla}</p>
                  <p className="mt-2 text-sm">{selecionada.significado}</p>
                </>
              ) : (
                <p className="text-sm">Clique em uma sigla para ver o significado</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
