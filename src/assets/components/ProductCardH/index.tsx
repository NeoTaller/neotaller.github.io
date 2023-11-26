import { deleteProductFromCart } from '../../../redux/features/shoppingCartSlice';
import { useAppDispatch } from '../../../redux/store';
import trashCan from '../../icons/Delete.svg'
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
        <h4 className='headline2'>{producto.title}</h4>
        <p className='text1'>Talla M</p>
        <p className='text4'>{producto.description}</p>
        <div className='card-h-info--ap'>
          <div className='card-h-info--artista'>
              <p className='text5'>Ilustrado por</p>
              <figure>
                <img src={defaultImg} alt="Artista 1" />
              </figure>
              <p className='text6'>Artista 1</p>
          </div>
          <div className='card-h-precio'>
            <p className='text1'>Precio</p>
            <p className='text2'>{producto.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}



