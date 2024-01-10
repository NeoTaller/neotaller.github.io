import { Link } from 'react-router-dom'
import './index.css'
import { ProductCardHSm } from '../../components/ProductCardHSm'
import { useAppSelector } from '../../../redux/store'

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

const Checkout = () => {
  const productosCarrito = useAppSelector((state) => state.shoppingCart.productList)
  const total = useAppSelector((state) => state.shoppingCart.total)

  return (
    <main className="checkout">
      <section className="checkout-container">
        <div className='checkput-steps'>
          <div className="step">
            <div className='step-circle'>
              <span className='headline1'>1</span>
            </div>
            <p className='text5'>Información</p>
          </div>
          <span className='union'></span>
          <div className="step">
            <div className='step-circle sc-inactive'>
              <span className='headline1'>2</span>
            </div>
            <p className='text5'>Envío</p>
          </div>
          <span className='union'></span>
          <div className="step">
            <div className='step-circle sc-inactive'>
              <span className='headline1'>3</span>
            </div>
            <p className='text5'>Pago</p>
          </div>
        </div>
        <form className='checkout-form'>
          <h3 className='cf-col1 headline4'>Datos personales</h3>
          <div className="cf-col2">
            <div className="cf-flexColStart">
              <label className='text3' htmlFor="nombre">Nombre*</label>
              <input type="text" name='nombre'/>
            </div>
            <div className="cf-flexColStart">
              <label className='text3' htmlFor="apellido">Apellido*</label>
              <input type="text" name='apellido' />
            </div>
          </div>
          <div className="cf-col2">
            <div className="cf-flexColStart">
              <label className='text3' htmlFor="rut">Rut*</label>
              <input type="text" name='rut'/>
            </div>
            <div className="cf-flexColStart">
              <label className='text3' htmlFor="telefono">Teléfono*</label>
              <input type="text" name='telefono'/>
            </div>
          </div>
          <h3 className='cf-col4 headline4'>Datos para envío</h3>
          <div className="cf-col5">
            <div className="cf-dir1">
              <label className='text3' htmlFor="dir1">Dirección*</label>
              <input type="text" name='dir1' />
            </div>
            <div className="cf-dir2">
              <input type="text" name='dir2' />
            </div>
          </div>
          <div className="cf-col2">
            <div className="cf-flexColStart">
              <label className='text3' htmlFor="comuna">Comuna*</label>
              <input type="text" name='comuna'/>
            </div>
            <div className="cf-flexColStart">
              <label className='text3' htmlFor="region">Región*</label>
              <input type="text" name='region' />
            </div>
          </div>
          <div className="cf-col7">
              <label className='text3' htmlFor="email">Mail</label>
              <input type="email" name='email'/>
          </div>
          <div className="cf-col8">
            <input type="checkbox" name='recordar' />
            <label className='text4' htmlFor="recordar">Guardar mi información para hacer más rápida mi próxima compra</label>
          </div>
          <div className="cf-col9">
            <Link to={'/carrito'} className='text2'>{'<- volver al carrito'}</Link>
            <button className='text2'>Continuar a envíos</button>
          </div>
        </form>
        <section className='checkout-summary'>
          <h3 className='headline2'>Tu compra</h3>
          {
            productosCarrito.map((producto) => (
              <ProductCardHSm 
              id={producto.id}
              rutaImg= {producto.img}
              title = {producto.nombre}
              description = ''
              price= {producto.precio}
              />
            ))
          }
          <Link to={'/carrito'}>Volver al carrito</Link>
          <div className='summary-cobro'>
            <div className="checkout-subtotal">
              <p className='text4'>Subtotal</p>
              <p className='text4'>{total}</p>
            </div>
            <div className="checkout-subtotal">
              <p className='text4'>Código de descuento</p>
              <p className='text4'>-$$$</p>
            </div>
            <div className="checkout-subtotal">
              <p className='text4'>Envío</p>
              <p className='text4'>$$$$</p>
            </div>
            <div className="checkout-subtotal total">
              <p className='text1'>Total</p>
              <p className='text1'>$$$$$$</p>
            </div>
          </div>
          <h3 className='headline3'>Compra 100% Segura</h3>
          <div className='checkout-logos'>
            <span className="cajita"></span>
            <span className="cajita"></span>
            <span className="cajita"></span>
          </div>
        </section>
      </section>
    </main>
  )
}

export { Checkout }