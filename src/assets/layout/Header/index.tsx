import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ShoppingCartModal } from '../../components/ShoppingCartModal'
import searchIcon from '../../icons/search w.svg'
import userIcon from '../../icons/Log in w.svg'
import cartIcon from '../../icons/shopping-cart w.svg'
import neotallerLogo from '../../img/NeoTaller_Logo_W.svg'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { toggleLoginModal } from '../../../redux/features/loginModalSlice'

export function Header(){
  const user = useSelector((state: RootState) => state.user)

  const dispatch = useDispatch()

  const [isCartVisible, setIsCartVisible] = useState(false)

  return (
    <header >
    <div className='header-logo' >
      <img src={neotallerLogo} alt="NeoTaller Logo" />
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to={'/'} className={'headline3 h-semibold'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/tienda" } className={'headline3 h-semibold'}>Tienda</NavLink>
        </li>
        <li>
          <NavLink to={'/artistas'} className={'headline3 h-semibold'}>Artistas</NavLink>
        </li>
        <li>
          <NavLink to={'/contacto'} className={'headline3 h-semibold'}>Contacto</NavLink>
        </li>
        <li>
          <NavLink to={'/nosotros'} className={'headline3 h-semibold'}>Nosotros</NavLink>
        </li>
        {user.isAuth && 
        <li>
          <NavLink to={'/crear-producto'} className={'headline3 h-semibold'}>Crear Producto</NavLink>
        </li>}
      </ul>
    </nav>
    <section className='header-right'>
      <ul>
        <li><img className='icon' src={searchIcon} alt="Buscar" /></li>
        <li onClick={() => dispatch(toggleLoginModal())} ><img className='icon' src={userIcon} alt="Usuario" /></li>
        <li onClick={() => setIsCartVisible(!isCartVisible)}><img className='icon' src={cartIcon} alt="Carro"/></li>
      </ul>
    </section>
    <ShoppingCartModal setIsVisible={setIsCartVisible} isVisible={isCartVisible}/>
  </header>)
}