import defaultImg from '../../img/defaultImg.png'
import deleteIcon from '../../icons/trash-2.svg'
import './index.css';
import { useAppDispatch } from '../../../redux/store';
import { deleteProductFromCart } from '../../../redux/features/shoppingCartSlice';

interface ProductsInterface{
  id: number
  rutaImg: string;
  title: string;
  description: string;
  price: string;
}

export function ProductCardHSm (producto: ProductsInterface) {

  const dispatch = useAppDispatch()
  
  return(
    <div className='product-card-h-sm'>
      <figure className='card-h-sm-fig'>
        <img src={defaultImg} alt="producto" />
      </figure>
      <div className='card-h-sm-info'>
        <h4 className='headline4 h-medium'>{producto.title}</h4>
        <div className='card-h-sm-detalle'>
          <p className='text4 t-regular no-margin'>Talla M</p>
          <p className='text4 t-bold no-margin'>{`S ${producto.price}`}</p>
        </div>
      </div>
      <span className='card-h-sm-delete' onClick={() => dispatch(deleteProductFromCart(producto.id)) }>
        <img src={deleteIcon} alt="Eliminar del carrito" />
      </span>
    </div>
  )
}



