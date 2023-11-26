import { ArtistCard } from '../../components/ArtistCard'
import { ProductCardH } from '../../components/ProductCardH'
import defaultImg from '../../img/defaultImg.png'
import manito from '../../icons/save_water.svg'
import hojita from '../../icons/Leaf.svg'
import botecito from '../../icons/trash-2.svg'

import './index.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../redux/store'

// interface ProductsInterface{
//   rutaImg: string;
//   title: string;
//   description: string;
//   price: string;
// }

// const productosCarrito = [{
//   rutaImg: defaultImg,
//   title: 'Producto 1',
//   description: 'Lorem ipsum dolor sit amet consectetur.',
//   price: '$10000',
// },
// {
//   rutaImg: defaultImg,
//   title: 'Producto 2',
//   description: 'Lorem ipsum dolor sit amet consectetur.',
//   price: '$20000',
// },
// {
//   rutaImg: defaultImg,
//   title: 'Producto 3',
//   description: 'Lorem ipsum dolor sit amet consectetur.',
//   price: '$30000',
// }
// ]


const Carrito = () => {
  
  const productosCarrito = useAppSelector((state) => state.shoppingCart.productList)
  const total = useAppSelector((state) => state.shoppingCart.total)

  return (
    <main className="carrito">
      <section className='carrito-content'>
        <h3 className='headline2 carrito-content-title'>Tu Carrito</h3>
        <section className='carrito-content--products'>
          {
            productosCarrito.map((producto) => (
              <ProductCardH 
              key={producto.id}
              id={producto.id}
              rutaImg={producto.img}
              title={producto.nombre}
              description={`Talla ${producto.talla}`}
              price={producto.precio}
              />
            ))
          }
        </section>
        <section className='carrito-content--summary'>
          <h4 className='headline3'>Resumen de compra</h4>
          <span className='divider'></span>
          <p className='text3'>¿Tienes un código de descuento? Ingrésalo aquí</p>
          <input className='summary-input'type="text" name='discCode' id='discCode' placeholder='Ingresa tu código' />
          <p className='text4'>Tu código será aplicado en el checkout</p>
          <div className="despacho-precio">
            <p className='text3'>Despacho</p>
            <p className='text6'>Envío se calcula en Checkout</p>
          </div>
          <div className="subtotal">
            <h4 className='headline3'>Sub Total</h4>
            <h4 className='headline3'>{`$ ${total}`}</h4>
          </div>
          <span className="divider"></span>

          <div className="summary-benefits">
            <h4 className='headline3'>Con tu compra ayudas a ahorrar:</h4>
            <div className='aportes'>
              <figure>
                <img src={manito} alt="manito" />
                <p className='text6'><b>2700lt</b> de agua</p>
              </figure>
              <figure>
                <img src={hojita} alt="hojita" />
                <p className='text6'><b>20 Kg</b> de emisiones de CO2</p>
              </figure>
              <figure>
                <img src={botecito} alt="botecito" />
                <p className='text6'><b>0.3 Kg</b> de desechos</p>
              </figure>
            </div>
            <h4 className='headline3'>Con tu compra apoyas a:</h4>
            <div className='summary-cards-container'>
              <ArtistCard name='Artista 1' rutaImg={defaultImg}/>
              <ArtistCard name='Artista 2' rutaImg={defaultImg}/>
            </div>
          </div>
          <Link to={'/checkout'} className='text1 boton oscuro'>Ir a pagar</Link>
          <Link to={'/tienda'} className='text1 boton claro'>Seguir Comprando</Link>
        </section>
      </section>
    </main>
  )
}

export { Carrito }