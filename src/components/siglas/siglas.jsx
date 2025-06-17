import { useState } from 'react';

const dados = {
  'Tecnologia da Informação': {
    descricaoArea: 'Esta área é o coração da inovação digital, desenvolvendo e gerenciando soluções de software, infraestrutura e serviços de TI que impulsionam a eficiência e o crescimento da empresa.',
    siglas: [
      { sigla: 'SO', significado: 'Service Solutions' },
      { sigla: 'GS', significado: 'Global Services' },
      { sigla: 'BD', significado: 'Bosch Digital' },
      { sigla: 'CS', significado: 'Commercial Service' },
      { sigla: 'PM', significado: 'Operation Management' },
      { sigla: 'PT', significado: 'Power Tools' },
      { sigla: 'CaP', significado: 'Campinas Plant' },
      // ETS será uma área separada agora, então a removemos daqui
      { sigla: 'HRS', significado: 'Human Resource Services' },
      { sigla: 'RBLA', significado: 'Robert Bosch Latin America' },
      { sigla: 'CWW', significado: 'Center World Wide' },
      { sigla: 'SMAG', significado: 'Smart Agriculture' },
      { sigla: 'SWD', significado: 'Software Engineering Development' },
      { sigla: 'DOE1', significado: 'DevOps Engineering' },
    ],
  },
    'Engineering Technical School (ETS)': { // Nova área para a ETS
    descricaoArea: 'A Engineering Technical School (ETS) da Bosch oferece formação técnica de excelência, preparando futuros profissionais com conhecimentos teóricos e práticos alinhados às necessidades da indústria.',
    siglas: [
      { sigla: 'MEC', significado: 'Mecatrônica' },
      { sigla: 'ELE', significado: 'Eletrônica Industrial' },
      { sigla: 'AUT', significado: 'Automação Industrial' },
      { sigla: 'DS', significado: 'Desenvolvimento de Sistemas' },
      { sigla: 'I&C', significado: 'Instrumentação e Controle' },
    ],
  },
  'Engenharia e Manufatura': {
    descricaoArea: 'Focada na otimização de processos de produção e desenvolvimento de novas tecnologias para manufatura avançada, garantindo alta qualidade e eficiência.',
    siglas: [
      { sigla: 'MFE', significado: 'Manufacturing Engineering' },
      { sigla: 'R&D', significado: 'Research and Development' },
      { sigla: 'QC', significado: 'Quality Control' },
      { sigla: 'LEAN', significado: 'Lean Manufacturing' },
    ],
  },
  'Recursos Humanos': {
    descricaoArea: 'Responsável pela gestão de talentos, desenvolvimento de colaboradores, cultura organizacional e bem-estar, promovendo um ambiente de trabalho produtivo e inclusivo.',
    siglas: [
      { sigla: 'L&D', significado: 'Learning & Development' },
      { sigla: 'HRBP', significado: 'HR Business Partner' },
      { sigla: 'TA', significado: 'Talent Acquisition' },
    ],
  },

};

export default function Siglas() {
  const [selecionada, setSelecionada] = useState(null);
  const [descricaoAreaAtual, setDescricaoAreaAtual] = useState(null);

  const handleClickSigla = (siglaItem, descricaoArea) => {
    setSelecionada(siglaItem);
    setDescricaoAreaAtual(descricaoArea);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="bg-white p-6 sm:p-8 md:p-10 shadow-lg rounded-xl max-w-6xl w-full border border-gray-100">
        <h2 className="text-center font-extrabold text-3xl sm:text-4xl text-gray-800 mb-10 pb-4 border-b border-gray-200">
          Glossário de Siglas
        </h2>

        {Object.entries(dados).map(([area, dadosArea]) => (
          <div key={area} className="mb-10 last:mb-0"> {/* last:mb-0 remove margin-bottom do último item */}
            <h3 className="text-xl font-semibold mb-6 text-gray-700 border-b border-gray-200 pb-2">
              {area}
            </h3>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Seção de Botões de Siglas */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full lg:w-2/3">
                {dadosArea.siglas.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleClickSigla(item, dadosArea.descricaoArea)}
                    className={`
                      py-3 px-4 rounded-lg
                      transition-all duration-200 ease-in-out
                      text-center text-base font-medium
                      shadow-sm
                      ${selecionada?.sigla === item.sigla
                        ? 'bg-teal-600 text-white shadow-md transform scale-100' // Mantém scale 100 para sutileza
                        : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-teal-400'
                      }
                    `}
                  >
                    {item.sigla}
                  </button>
                ))}
              </div>

              {/* Card de Detalhes da Sigla */}
              <div
                className={`
                  w-full lg:w-1/3
                  bg-teal-600 text-white p-6 rounded-lg shadow-md
                  flex flex-col justify-center items-center
                  text-center
                  transition-all duration-300 ease-in-out
                  ${selecionada ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                `}
                // Adiciona um estilo inline para garantir que ele esteja visível mesmo quando não há sigla selecionada, mas com a mensagem padrão
                style={{ opacity: selecionada ? 1 : 1, transform: selecionada ? 'translateY(0)' : 'translateY(0)' }}
              >
                {selecionada ? (
                  <>
                    <p className="text-4xl font-extrabold mb-3 leading-none">{selecionada.sigla}</p>
                    <p className="text-lg font-light mb-4">{selecionada.significado}</p>
                    {descricaoAreaAtual && (
                      <p className="text-sm font-light opacity-80 mt-2 leading-relaxed">
                        <span className="font-semibold block mb-1">Sobre a Área:</span>
                        {descricaoAreaAtual}
                      </p>
                    )}
                  </>
                ) : (
                  <div className="text-white text-opacity-80 font-normal text-base flex flex-col items-center justify-center h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>
                      Clique em uma sigla
                      <br />para explorar seu significado.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}