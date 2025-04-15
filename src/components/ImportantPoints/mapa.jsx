// src/components/Mapa.jsx
import ImportantPoints from './ImportantPoints';

export default function Mapa() {
  return (
    <div className="flex justify-center mt-20 space-x-20">
      <img src="planta.jpg" alt="Mapa da Planta" className="rounded-lg shadow-lg w-1/4" />
      <ImportantPoints />
    </div>
  );
}
