// src/App.jsx
import Header from './components/header/header';
import Title from './components/title/title';
import Mapa from './components/ImportantPoints/mapa';
import Siglas from './components/siglas/siglas';
import Card from './components/card/card';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <Main>
        <Title />
        <Mapa />
        <Siglas />
        <Card />
      </Main>
      <Footer />
    </div>
  );
}
