import Card from '../card/card';
import Som from '../som/som';

export default function Dashboard() {
  return (
    <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto p-6">
      {/* Card ocupa até 50% da largura */}
      <div className="flex-1 min-w-[320px] max-w-lg">
        <Card />
      </div>
      
      {/* Som ocupa menos largura, max-w-md */}
      <div className="flex-1 min-w-[320px] max-w-md">
        <Som />
      </div>
    </div>
  );
}
