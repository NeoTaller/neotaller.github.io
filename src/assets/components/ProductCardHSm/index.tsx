import defaultImg from '../../img/defaultImg.png'
import './index.css';

interface ProductsInterface{
  rutaImg: string;
  title: string;
  description: string;
  price: string;
}

export function ProductCardHSm (producto: ProductsInterface) {

  return(
    <div className='product-card-h-sm'>
      <figure className='card-h-sm-fig'>
        <img src={defaultImg} alt="producto" />
      </figure>
      <div className='card-h-sm-info'>
        <h4 className='text5'>{producto.title}</h4>
        <p className='text6'>Talla M</p>
        <div className='card-h-sm-precio'>
            <p className='text5'>Precio</p>
            <p className='text6'>{producto.price}</p>
        </div>
      </div>
    </div>
  )
}



