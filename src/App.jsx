import { useState, useEffect } from 'react';
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

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await obtenerProductos();
      setProductos(response);
      setCargando(false);
    }

    fetchProducts();
  }, []);


  console.log(productos)

  if (cargando) {
    return (<><h1>CARGANDO</h1></>)
  }


  return (
    <>
      <Header>
        <Nav links={links} />
      </Header>

      <main>
        <ProductGallery products={productos} />
      </main>

      <Footer />
    </>
  )
}

async function obtenerProductos() {
  const response = await fetch('https://68d9b3fa90a75154f0dafa92.mockapi.io/api/v1/products');
  const data = await response.json();

  return data;
}

export default App
