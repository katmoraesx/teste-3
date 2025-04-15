export default function Siglas() {
  return (
    <div className="bg-white p-20 shadow-lg mx-20 mt-20 text-sm">
      <h2 className="text-center font-bold">SIGLAS</h2>
      <div className="flex justify-between mt-20">
        <div className="w-3/6 grid grid-cols-5 gap-2 text-center">
          {Array.from({ length: 35 }).map((_, i) => (
            <p key={i}>• S.O</p>
          ))}
        </div>
        <div className="bg-teal-600 text-white p-8 w-1/3 text-center font-bold">SIGNIFICADO</div>
      </div>
    </div>
  );
}
