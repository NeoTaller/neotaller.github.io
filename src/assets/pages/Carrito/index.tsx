import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../redux/store'
import { ProductCardH } from '../../components/ProductCardH'
import { ArtistAvatar } from '../../components/ArtistAvatar'
import defaultImg from '../../img/defaultImg.png'
import manito from '../../icons/save_water.svg'
import hojita from '../../icons/Leaf.svg'
import botecito from '../../icons/trash-2.svg'
import './index.css'

const Carrito = () => {
  
  const productosCarrito = useAppSelector((state) => state.shoppingCart.productList)
  const total = useAppSelector((state) => state.shoppingCart.total)

  return (
    <main className="carrito">
      <div className='carrito-content-title'>
        <h2 className='headline1 h-semibold'>Carrito de compras</h2>
      </div>
      <section className='carrito-content'>
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
          <h4 className='headline2 h-semibold'>Resumen de compra</h4>
          <p className='text3 t-bold'>¿Tienes un código de descuento?</p>
          <input className='summary-input'type="text" name='discCode' id='discCode' placeholder='Ingresa tu código' />
          <p className='text4'>Tu código será aplicado en el checkout</p>
          <div className="despacho-precio">
            <p className='text1 t-bold'>Despacho</p>
            <p className='text2 t-regular'>Envío se calcula en Checkout</p>
          </div>
          <div className="subtotal">
            <h4 className='headline3 h-medium'>Sub Total</h4>
            <h4 className='headline3 h-medium'>{`$ ${total}`}</h4>
          </div>
          <span className="divider"></span>
          <h4 className='headline3'>Con tu compra apoyas a:</h4>
          <div className='summary-cards-container'>
              <ArtistAvatar name='Artista 1' rutaImg={defaultImg}/>
              <ArtistAvatar name='Artista 2' rutaImg={defaultImg}/>
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
          </div>
          <span className="divider"></span>
          <span className='boton primario'>
            <Link to={'/checkout'} className='headline3 h-semibold'>Ir a pagar</Link>
          </span>
          <span className='boton secundario'>
            <Link to={'/tienda'} className='headline3 h-semibold'>Seguir Comprando</Link>
          </span>
        </section>
      </section>
    </main>
  )
}

export { Carrito }