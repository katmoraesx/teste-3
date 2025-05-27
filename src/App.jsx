import Header from './components/header/header';
import Title from './components/title/title';
import Mapa from './components/ImportantPoints/mapa';
import Siglas from './components/siglas/siglas';
import Dashboard from './components/Dashboard/Dashboard'; // contém Card + Som
import Footer from './components/footer/footer';

export default function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <Title />
      <Mapa />
      <Siglas />
      {/* Remova estas duas linhas:
        <Card />
        <Som />
      */}
      <Dashboard />
      <Footer />
    </div>
  );
}
