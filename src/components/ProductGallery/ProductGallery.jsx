import './ProductGallery.css';
import Card from '../Card';

function ProductGallery({ productList }) {
  let data = <h2 className='text-center'>Catálogo vacío</h2>
  let title;

  if (productList && productList.length > 0) {
    data = productList.map((product) => <Card key={product.id} data={product} />);
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
