import { Link } from 'react-router-dom';
import './index.css';

interface Props {
  rutaImg: string;
  title: string;
  description: string;
  price: string | number;
}

export function ProductCard ({ title, description, rutaImg, price } : Props) {

  return(
    <div className="card-products">
      <div className="card-top">
        <h3 className='card-title'>
          <Link className='card-title--link' to={'/detalle'}>{title}</Link>
        </h3>
        <span className='like'>❤️</span>
      </div>
      <div className="card-middle">
        <img className='card-img' src={rutaImg} alt="" />
        <button className='addToCart'>Añadir al Carrito</button>
      </div>
      <div className="card-bottom">
        <p className="price">{'$ '+ price}</p>
        <p className='desc'>{description}</p>
      </div>
    </div>
  )
}



