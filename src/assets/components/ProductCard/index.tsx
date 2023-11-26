import { useAppDispatch } from '../../../redux/store';
import { CartProduct, addProductToCart } from '../../../redux/features/shoppingCartSlice';
import likeButton from '../../../assets/icons/like button.svg';
import cartIcon from '../../icons/shopping-cart w.svg'
import './index.css';
import { Link } from 'react-router-dom';

interface Props {
  id : number;
  rutaImg: string;
  title: string;
  talla: string;
  price: string;
}

export function ProductCard ({ id, title, talla, rutaImg, price } : Props) {

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
    <div className="card-products" >
      <Link className='card' to={`/detalle/${id}`}>
        <figure>
          <img className="card-img" src={rutaImg} alt="" />
        </figure>
        <div className="card-middle">
            <h3 className="headline3 h-medium card-title--link">{title}</h3>
            <img className="like" src={likeButton} alt="Like" />
        </div>
        <div className="card-bottom">
          <p className="text2 t-regular">{`Talla ${talla}`}</p>
          <p className="text2 t-bold">{`$ ${price}`}</p>
        </div>
      </Link>
        <button className='addToCartBtn' onClick={handleClick}>
          <p className='headline3 h-semibold'>Añadir</p>
          <img src={cartIcon} alt="Añadir al carrito" />
        </button>
    </div>
  )
}



