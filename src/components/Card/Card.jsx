function Card({ title = '', text = '', image = null, buttons = [] }) {
  return <>
    <div className="card" style={{ width: "18rem" }}>
      {image && <img src={image} className="card-img-top" alt="..." />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer">
        <div className="btn-group" role="group">
          {buttons.map((button, index) => (
            <button key={index} className="btn btn-sm btn-primary" onClick={button.onClick}>{button.text}</button>
          ))}
        </div>
      </div>
    </div>
  </>
}

export default Card;
