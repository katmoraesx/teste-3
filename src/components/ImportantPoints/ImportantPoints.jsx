export default function ImportantPoints() {
  return (
    <div className="bg-gray-100 p-5 shadow-lg w-1/4 text-sm rounded-md">
      <h2 className="font-bold text-center mb-2">PONTOS IMPORTANTES</h2>
      <ul className="space-y-2 text-gray-700">
        <li><span className="inline-block w-4 h-4 bg-red-600 rounded-full mr-2"></span>Ponto de Encontro</li>
        <li><span className="inline-block w-4 h-1 bg-black mr-2"></span>Rotas Principais</li>
        <li><span className="inline-block w-4 h-4 bg-blue-600 rounded-full mr-2"></span>Ponto de Referência</li>
      </ul>
    </div>
  );
}
