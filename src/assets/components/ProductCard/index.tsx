import { Link } from 'react-router-dom';
import './index.css';
import { useAppDispatch } from '../../../redux/store';
import { CartProduct, addProductToCart } from '../../../redux/features/shoppingCartSlice';

interface Props {
  id : number;
  rutaImg: string;
  title: string;
  description: string;
  price: string;
}

export function ProductCard ({ id, title, description, rutaImg, price } : Props) {

  const dispatch = useAppDispatch()

  const productToCart : CartProduct = {
    id: id,
    talla: 'XL',
    nombre: title,
    img: rutaImg,
    precio: price,
  }
  const handleClick = () => {
    dispatch(addProductToCart(productToCart))
  }

  return(
    <div className="card-products">
      <div className="card-top">
        <h3 className='card-title'>
          <Link className='card-title--link' to={`/detalle/${id}`}>{title}</Link>
        </h3>
        <span className='like'>❤️</span>
      </div>
      <div className="card-middle">
        <img className='card-img' src={rutaImg} alt="" />
        <button onClick={handleClick} className='addToCart'>Añadir al Carrito</button>
      </div>
      <div className="card-bottom">
        <p className="price">{'$ '+ price}</p>
        <p className='desc'>{description}</p>
      </div>
    </div>
  )
}



