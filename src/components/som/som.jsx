import { useRef } from 'react';
import { Volume2, PauseCircle } from 'lucide-react';

export default function Som() {
  const audioContinuo = useRef(null);
  const audioIntermitente = useRef(null);

  const stopAll = () => {
    audioContinuo.current?.pause();
    audioIntermitente.current?.pause();
    audioContinuo.current.currentTime = 0;
    audioIntermitente.current.currentTime = 0;
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-black shadow text-sm text-gray-800 mt-10 max-w-md mx-auto">
      <h3 className="text-lg font-bold mb-6 text-center">Simulador de Alarme</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        <button
          onClick={() => {
            stopAll();
            audioContinuo.current?.play();
          }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded flex items-center gap-3"
        >
          <Volume2 size={24} />
          Som Contínuo
        </button>
        <button
          onClick={() => {
            stopAll();
            audioIntermitente.current?.play();
          }}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded flex items-center gap-3"
        >
          <Volume2 size={24} />
          Som Intermitente
        </button>
        <button
          onClick={stopAll}
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded flex items-center gap-3"
        >
          <PauseCircle size={24} />
          Parar Som
        </button>
      </div>

      {/* Áudios escondidos */}
      <audio ref={audioContinuo} src="/sons/alarme_continuo.mp3" />
      <audio ref={audioIntermitente} src="/sons/alarme_intermitente.mp3" />
    </div>
  );
}