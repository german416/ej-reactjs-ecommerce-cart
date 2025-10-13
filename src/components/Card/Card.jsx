function Card({ title = '', text = '', image = '../../../public/product_image_place_holder.png' }) {
  return <>
    <div className="card" style={{ width: "18rem", marginBottom: "1rem", marginRight: "0.8rem" }}>
      {image && <img src={image} className="card-img-top" alt="..." />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <div className="btn-group" role="group">
          <button className="btn btn-sm btn-primary">Comprar</button>
          <button className="btn btn-sm btn-warning">Guardar</button>
        </div>
      </div>
    </div>
  </>
}

export default Card;
