import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";
import { ProductCardHSm } from "../ProductCardHSm";
import './index.css'

interface ShoppingCartModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


const ShoppingCartModal = (props : ShoppingCartModalProps) => {

  const shoppingCartProducts = useAppSelector((state) => state.shoppingCart.productList)
  const total = useAppSelector((state) => state.shoppingCart.total)
  const navigate = useNavigate()

  return (

      props.isVisible && <div
      style={
        {
          position: 'absolute',
          top: '80px',
          right: '0',
          width: '520px',
          backgroundColor: 'white',
          zIndex: 30,
        }
      }
      >
        <div className="title">
          <h3 className="headline2 h-bold">Tu Carrito</h3>
          <span onClick={() => props.setIsVisible(false)}>X</span>
        </div>
        <div className="container">
          {(shoppingCartProducts.length === 0) && <p>No hay productos</p>}

          {
              shoppingCartProducts.map(({id, talla, nombre, img, precio}) =>{
                return (
                  <div key={id}>
                    <ProductCardHSm  rutaImg={img} title={nombre} price={precio} description={`Talla ${talla}`} id={id}  />
                  </div>
                )
            })
          }
        </div>
        <div className="totalprice">
          <p className="headline4 h-regular">Total</p>
          <p className="headline4 h-medium">{`$ ${total}`}</p>
        </div>
        <div className="checkout-cart-modal">
          <button className="headline3 h-semibold cart-modal-carrito" onClick={() => {
            props.setIsVisible(false)
            navigate('/carrito')
            }}>Ir al carrito</button>
          <button className="headline3 h-semibold cart-modal-tienda" onClick={() => {
            props.setIsVisible(false)
            navigate('/tienda')
            }}>Seguir comprando</button>
        </div>
      </div>
      
  )
}

export { ShoppingCartModal }