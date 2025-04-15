export default function Card() {
    return (
      <div className="bg-orange-500 text-black p-10 mx-auto max-w-4xl border-2 border-black flex mt-10">
        <div className="w-1/2 flex flex-col items-center justify-center border-r-2 border-black pr-4">
          <h2 className="font-bold text-2xl">EMERGÊNCIA</h2>
          <p className="text-lg">LIGUE</p>
          <p className="text-4xl font-bold tracking-widest">1 2 3 4</p>
          <p className="text-lg">(19) 2103-1234</p>
        </div>
        <div className="w-1/2 pl-4">
          <div className="grid grid-cols-2 gap-2 text-sm font-bold">
            <div className="border-2 border-black p-2 text-center">SOM</div>
            <div className="border-2 border-black p-2 text-center">PROCEDIMENTO</div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
            <div className="border-2 border-black p-2 text-center">
              <p>──</p><p>CONTÍNUO</p><p>1 MINUTO</p>
            </div>
            <div className="border-2 border-black p-2 text-center">
              CHAMADA EXCLUSIVA PARA BOMBEIROS E BRIGADISTAS.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
            <div className="border-2 border-black p-2 text-center">
              <p>— — —</p><p>INTERMITENTE</p><p>1 MINUTO</p>
            </div>
            <div className="border-2 border-black p-2 text-center">
              ABANDONE IMEDIATAMENTE O PRÉDIO E SE DIRIJA PARA O PONTO DE ENCONTRO MAIS PRÓXIMO.
            </div>
          </div>
        </div>
      </div>
    );
  }
  