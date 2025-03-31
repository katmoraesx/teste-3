import React from "react";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow flex justify-between items-center p-4">
        <div className="text-red-600 font-bold">BOSCH</div>
        <div className="flex space-x-4">
          <span>Conta</span>
          <span>Ajuda</span>
          <span>Busca</span>
        </div>
      </header>

      {/* Título */}
      <h1 className="text-center text-2xl font-bold text-blue-900 mt-6">
        PLANTA CaP/ETS
      </h1>

      {/* Outras seções aqui... */}
    </div>
  );
}

export default App;
