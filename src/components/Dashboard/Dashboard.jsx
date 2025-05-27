import Card from '../card/card';
import Som from '../som/som';

export default function Dashboard() {
  return (
    <div className="flex flex-wrap md:flex-row flex-col justify-center gap-70 max-w-6xl mx-auto p-6">
      {/* Card ocupa mais espaço com flex-[2] */}
      <div className="flex-[2] min-w-[320px] max-w-full w-full">
        <Card />
      </div>

      {/* Som ocupa menos espaço com flex-[1] */}
      <div className="flex-[1] min-w-[280px] max-w-md w-full">
        <Som />
      </div>
    </div>
  );
}
