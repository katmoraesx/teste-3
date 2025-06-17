import { useRef, useState } from 'react'; // Importe useState
import { Volume2, PauseCircle } from 'lucide-react'; // PauseCircle pode ser usado para o ícone do botão quando o som estiver ativo

export default function Som() {
  const audioContinuo = useRef(null);
  const audioIntermitente = useRef(null);
  const [playingSound, setPlayingSound] = useState(null); // Estado para controlar qual som está tocando ('continuo', 'intermitente', ou null)

  const stopAllSounds = () => {
    if (audioContinuo.current) {
      audioContinuo.current.pause();
      audioContinuo.current.currentTime = 0; // Reinicia o áudio para o começo
    }
    if (audioIntermitente.current) {
      audioIntermitente.current.pause();
      audioIntermitente.current.currentTime = 0; // Reinicia o áudio para o começo
    }
    setPlayingSound(null); // Nenhuma som está tocando
  };

  const toggleSound = (soundType) => {
    // Primeiro, para todos os sons para garantir que apenas um toque
    stopAllSounds();

    if (playingSound === soundType) {
      // Se o som clicado já estava tocando, ele já foi parado pelo stopAllSounds
      // Então, apenas definimos o estado para null
      setPlayingSound(null);
    } else {
      // Se outro som estava tocando ou nenhum som estava tocando
      // Inicia o som clicado
      if (soundType === 'continuo') {
        audioContinuo.current?.play();
      } else if (soundType === 'intermitente') {
        audioIntermitente.current?.play();
      }
      setPlayingSound(soundType); // Define o estado para o som que está tocando
    }
  };

  return (
    <div className="bg-white p-4 rounded-x0 border border-black shadow text-sm text-gray-800 mt-10 w-[500px] h-full">
      <h3 className="text-lg font-bold mb-6 text-center">Simulador de Alarme</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        <button
          onClick={() => toggleSound('continuo')}
          className={`
            font-bold py-3 px-8 rounded flex items-center gap-3
            transition-colors duration-200 ease-in-out
            ${playingSound === 'continuo'
              ? 'bg-red-700 text-white shadow-lg' // Estado ativo
              : 'bg-red-600 hover:bg-red-700 text-white' // Estado normal
            }
          `}
        >
          {playingSound === 'continuo' ? <PauseCircle size={24} /> : <Volume2 size={24} />}
          Som Contínuo
        </button>

        <button
          onClick={() => toggleSound('intermitente')}
          className={`
            font-bold py-3 px-8 rounded flex items-center gap-3
            transition-colors duration-200 ease-in-out
            ${playingSound === 'intermitente'
              ? 'bg-yellow-600 text-black shadow-lg' // Estado ativo
              : 'bg-yellow-500 hover:bg-yellow-600 text-black' // Estado normal
            }
          `}
        >
          {playingSound === 'intermitente' ? <PauseCircle size={24} /> : <Volume2 size={24} />}
          Som Intermitente
        </button>

        {/* O botão "Parar Som" foi removido */}
      </div>

      {/* Áudios escondidos */}
      <audio ref={audioContinuo} src="/sons/alarme_continuo.mp3" loop /> {/* Adicione loop para que o som continue */}
      <audio ref={audioIntermitente} src="/sons/alarme_intermitente.mp3" loop /> {/* Adicione loop para que o som continue */}
    </div>
  );
}