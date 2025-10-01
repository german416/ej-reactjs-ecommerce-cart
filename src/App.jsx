import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProductGallery from './components/ProductGallery';

function App() {
  const links = [
    { ref: '', label: 'Productos' },
    { ref: '', label: 'Carrito' },
    { ref: '', label: '¿Quienes somos?' },
    { ref: '', label: 'Contactenos' },
  ];

  const products = [];

  return (
    <>
      <Header>
        <Nav links={links} />
      </Header>

      <main>
        <ProductGallery products={products} />
      </main>

      <Footer />
    </>
  )
}

export default App
