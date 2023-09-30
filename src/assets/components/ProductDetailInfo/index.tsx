import defaultImg from '../../img/defaultImg.png';
import './index.css'

const ProductoDetailInfo = () => {
  return (
    <section className='pd-container'>
      <section className='pd-container-imgs'>
        <img className='principal' src={defaultImg} alt="" />
        <div className='carrusel'>
        <span>{'<'}</span>
        <img src={defaultImg} alt="" className="miniatura" />
        <img src={defaultImg} alt="" className="miniatura" />
        <img src={defaultImg} alt="" className="miniatura" />
        <span>{'>'}</span>
        </div>
      </section>
      <section className='pd-container-info'>
        <span className='container-info-like'>❤️</span>
        <h2>Nombre del Producto</h2>
        <p className='info-talla'>Talla</p>
        <div className="precio-container">
          <p className='info-precio'>$10.000</p>
          <div className="precio-sel-curr">
            <p className="precio-clp">CLP</p>
            <p className="precio-usd">USD</p>
          </div>
        </div>
        <div className='politica-envio'>
          <span>🚚</span>
          <p>Envíos gratis a partir de $$$</p>
          <a href="">Condiciones de envío</a> 
        </div>
        <div className="politica-devolucion">
          <span>🔃</span>
          <p>Tienes 30 días para devolverlo</p>
          <a href="">Condiciones de devolución</a>
        </div>
        <button className='detail-add'>Añadir al Carrito</button>
        <button className="detail-buy">Comprar Ahora</button>
        <div className='info-specs'>
          <h3>Especificaciones del producto</h3>
          <h4>Condición</h4>
            <span className="tag">Semi-nuevo</span>
          <h4>Material</h4>
            <span className="tag">Material A</span>
          <h4>Medidas</h4>
        </div>
        <section className='pd-ilustrador'>
          <div className="artista-perfil">
            <p>Ilustrado por</p>
            <div className='artista-perfil-img'>
              <figure>
                <img src={defaultImg} alt="artista" />
              </figure>
              <p>Nombre Artista</p>
            </div>
          </div>
            <button className='artista-coleccion'>ver sus productos</button>
        </section>
      </section>
    </section>
  )
}

export { ProductoDetailInfo }