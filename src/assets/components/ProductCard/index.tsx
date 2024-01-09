import { useAppDispatch } from '../../../redux/store';
import { CartProduct, addProductToCart } from '../../../redux/features/shoppingCartSlice';
import likeButton from '../../../assets/icons/like button.svg';
import cartIcon from '../../icons/shopping-cart w.svg'
import './index.css';
import { Link } from 'react-router-dom';
import { GetProducts } from '../../../interfaces/Products';

export function ProductCard ( props : GetProducts) {

  const dispatch = useAppDispatch()

  const productToCart : CartProduct = {
    id: props.id,
    talla: props.talla,
    nombre: props.nombre,
    img: props.img1? props.img1 : '',
    precio: props.precioNormal,
  }
  const handleClick = () => {
    dispatch(addProductToCart(productToCart))
  }

  return(
    <div className="card-products" >
      <Link className='card' to={`/detalle/${props.id}`}>
        <figure>
          <img className="card-img" src={`http://161.97.138.249:3000/${props.img1}`} alt={props.nombre} />
        </figure>
        <div className="card-middle">
            <h3 className="headline3 h-medium card-title--link">{props.nombre}</h3>
            <img className="like" src={likeButton} alt="Like" />
        </div>
        <div className="card-bottom">
          <p className="text2 t-regular">{`Talla ${props.talla}`}</p>
          <p className="text2 t-bold">{`$ ${props.precioNormal}`}</p>
        </div>
      </Link>
        <button className='addToCartBtn' onClick={handleClick}>
          <p className='headline3 h-semibold'>Añadir</p>
          <img src={cartIcon} alt="Añadir al carrito" />
        </button>
    </div>
  )
}



