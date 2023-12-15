import { deleteProductFromCart } from '../../../redux/features/shoppingCartSlice';
import { useAppDispatch } from '../../../redux/store';
import trashCan from '../../icons/trash-2.svg'
import defaultImg from '../../img/defaultImg.png'
import './index.css';

interface ProductsInterface{
  id: number;
  rutaImg: string;
  title: string;
  description: string;
  price: string;
}

export function ProductCardH (producto: ProductsInterface) {
  const dispatch = useAppDispatch()
  
  return(
    <div className='product-card-h'>
      <figure className='card-h-fig'>
        <img src={defaultImg} alt="producto" />
      </figure>
      <div className='card-h-info'>
        <img className='eliminar' src={trashCan} alt="eliminar" onClick={() => dispatch(deleteProductFromCart(producto.id))} />
        <h4 className='headline2 h-medium'>{producto.title}</h4>
        <div className='card-h-info--ap'>
          <p className='text1 t-regular no-margin'>{producto.description}</p>
          <p className='headline3 h-semibold no-margin'>{`$ ${producto.price}`}</p>
        </div>
      </div>
    </div>
  )
}



