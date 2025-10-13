import './ProductGallery.css';
import Card from '../Card';

function ProductGallery({ products }) {
  let data = <h2 className='text-center'>Catálogo vacío</h2>
  let title;

  if (products && products.length > 0) {
    data = products.map((product) => (
      <Card
        key={product.id}
        title={product.name}
        text={product.description}
        price={product.price}
      />
    ));
    title = <h2 className='text-center'>Nuestro catálogo</h2>
  }

  return <>
    <div className='container-fluid'>
      <div className='row p-2'>
        {title}
      </div>
      <div className='row'>
        {data}
      </div>
    </div>
  </>
}

export default ProductGallery;
