import { Link } from 'react-router-dom';
import './index.css';

interface ProductsInterface{
  rutaImg: string;
  title: string;
  description: string;
  price: string;
}

export function ProductCard (product: ProductsInterface) {

  return(
    <div className="card-products">
      <div className="card-top">
        <h3 className='card-title'>
          <Link className='card-title--link' to={'/detalle'}>{product.title}</Link>
        </h3>
        <span className='like'>❤️</span>
      </div>
      <div className="card-middle">
        <img className='card-img' src={product.rutaImg} alt="" />
        <button className='addToCart'>Añadir al Carrito</button>
      </div>
      <div className="card-bottom">
        <p className="price">{'$ '+ product.price}</p>
        <p className='desc'>{product.description}</p>
      </div>
    </div>
  )
}



