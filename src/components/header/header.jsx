// src/components/Header.jsx
export default function Header() {
    return (
      <header className="bg-white shadow flex justify-between items-center p-3 text-sm">
        <div className="text-red-600 font-bold text-lg">BOSCH</div>
        <div className="flex space-x-4">
          <span>Conta</span>
          <span>Ajuda</span>
          <span>Busca</span>
        </div>
      </header>
    );
  }
  