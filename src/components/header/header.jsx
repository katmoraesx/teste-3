// src/components/Header.jsx
import { Link } from 'react-router-dom'; // ✅ Import necessário para <Link>

export default function Header() {
  return (
    <header className="bg-white">
      <div>
        <img src="src/assets/supergraphic/bosch-1920-cropped.svg" alt="Suphergraphic Bosch" />
      </div>
      <div className="container mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-gray-800">
          <img src="/src/assets/bosch-floating-logo" alt="Logo" />
        </Link>

        {/* Links de Navegação */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-500">Conta</Link>
            </li>
            <li>
              <Link to="/docs" className="text-gray-600 hover:text-blue-500">Documentos</Link>
            </li>
            <li>
              <Link to="/estudantes" className="text-gray-600 hover:text-blue-500">Aluno</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
