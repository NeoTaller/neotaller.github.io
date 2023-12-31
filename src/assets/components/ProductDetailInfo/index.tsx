import axios from 'axios';
import defaultImg from '../../img/defaultImg.png';
import './index.css'
import { useEffect, useState } from 'react';
import { GetProductDetail } from '../../../interfaces/Products';

const ProductoDetailInfo = ( {productId} : {productId:string} ) => {

  const [product, setProduct] = useState<GetProductDetail>({
    id : 0,
    idMarca : 0,
    nombre : '',
    descripcion : '',
    precio : 0,
    inventario : [],
  })
  console.log( productId );

  useEffect(() => {
    const getProductDetail = async() => {
      const data  = await axios.get(`http://localhost:3000/productos/${productId}`)
      if(!data) return;
      console.log(data);
      setProduct(data.data)
    }
    getProductDetail()
  }, []);

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
        <h2>{product.nombre}</h2>
        <h3>{product.descripcion}</h3>
        <p className='info-talla'>Talla</p>
        <div className="precio-container">
          <p className='info-precio'>{`$ ${product.precio}`}</p>
          <div className="precio-sel-curr">
            <p className="precio-clp">CLP</p>
            <p className="precio-usd">USD</p>
          </div>
        </div>
        {/* ilustrado por */}
        <section className='pd-ilustrador'>
            <p className='pd-ilustrador-tag text1'>Ilustrado por</p>
            <figure className='pd-ilustrador-fig'>
              <img src={defaultImg} alt="artista" />
            </figure>
            <p className='pd-ilustrador-name text6'>Nombre Artista</p>
        </section>
        {/* fin ilustrado por */}
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
        <div className='info-specs'>
          <h3 className='headline3'>Especificaciones del producto</h3>
          <div className="info-specs--condition">
            <h4>Condición</h4>
            <span className="tag">Semi-nuevo</span>
          </div>
          <div className="info-specs--material">
            <h4>Material</h4>
            <span className="tag">Material A</span>
          </div>
          <div className="info-specs--measure">  
            <h4>Medidas</h4>
            <aside>
              <p>Cintura: xx cm</p>
              <p>Cadera: xx cm </p>
              <p>Largo: xxx cm</p>
            </aside>
          </div>
        </div>
        <button className='detail-add'>Añadir al Carrito</button>
        <button className="detail-buy">Comprar Ahora</button>
        
      </section>
    </section>
  )
}

export { ProductoDetailInfo }