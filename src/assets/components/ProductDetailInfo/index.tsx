import axios from 'axios';
import defaultImg from '../../img/defaultImg.png';
import './index.css'
import { useEffect, useState } from 'react';
import { GetProductDetail } from '../../../interfaces/Products';

const ProductoDetailInfo = ( {productId} : {productId:string} ) => {

  const [product, setProduct] = useState<GetProductDetail>({
    id: 0,
    nombre: '',	  
    descripcion: '',
    talla: '',
    precioNormal: '',
  })
  
  const [imgPpal, setImgPpal] = useState('')

  useEffect(() => {
    const getProductDetail = async() => {
      const data  = await axios.get(`http://161.97.138.249:3000/productos/${productId}`)
      if(!data) return;
      setProduct(data.data)
    }
    getProductDetail()
  }, []);

useEffect(() => {setImgPpal(`http://161.97.138.249:3000/${product.img1}`)}, [product])

  return (
    <section className='pd-container'>
      <section className='pd-container-imgs'>
        <img className='principal' src={imgPpal} alt={product.nombre} />
        <div className='carrusel'>
        <img src={`http://161.97.138.249:3000/${product.img1}`} alt={`Imagen 1 de ${product.nombre}`} className="miniatura" onClick={() => setImgPpal(`http://161.97.138.249:3000/${product.img1}`)} />
        <img src={`http://161.97.138.249:3000/${product.img2}`} alt={`Imagen 2 de ${product.nombre}`} className="miniatura" onClick={() => setImgPpal(`http://161.97.138.249:3000/${product.img2}`)} />
        <img src={`http://161.97.138.249:3000/${product.img3}`} alt={`Imagen 3 de ${product.nombre}`} className="miniatura" onClick={() => setImgPpal(`http://161.97.138.249:3000/${product.img3}`)}/>
        </div>
      </section>
      <section className='pd-container-info'>
        {product.esFavorito && <span className='container-info-like'>❤️</span>}
        <h2>{product.nombre}</h2>
        <h3>{product.descripcion}</h3>
        <p className='info-talla'>{`Talla ${product.talla}`}</p>
        <div className="precio-container">
          <p className='info-precio'>{`$ ${product.precioNormal}`}</p>
        </div>
        {/* ilustrado por - Se debe consultar por el ID de artista de cada producto al back*/}
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
            <span className="tag">{product.condicion}</span>
          </div>
          <div className="info-specs--material">
            <h4>Material</h4>
            <span className="tag">{product.material}</span>
          </div>
          <div className="info-specs--measure">  
            <h4>Medidas</h4>
            <aside>
              <p>{`Cadera: ${product.medidaCadera} cm`}</p>
              <p>{`Pecho: ${product.medidaPecho} cm `}</p>
              <p>{`Largo: ${product.medidaLargo} cm`}</p>
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