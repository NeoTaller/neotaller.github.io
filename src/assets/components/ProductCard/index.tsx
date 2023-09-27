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
      <span className='card-products--like'>❤️</span>
      <img className='card-products--img' src={product.rutaImg} alt="" />
      <a href="#/Detalle"><h3 className='card-products--title'>{product.title}</h3></a>
      <p className='card-products--desc'>{product.description}</p>
      <section className='card-products--shopInfo'>
        <p className="card-products--price">{'$ '+ product.price}</p>
        <button className='card-products--addToCart'>Añadir al Carrito</button>
      </section>
    </div>
  )
}



