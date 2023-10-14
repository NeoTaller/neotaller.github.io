import { Link, NavLink } from 'react-router-dom'
import  searchIcon from '../../icons/icon _search normal 1_.svg'
import translateIcon from '../../icons/icon _translate_.svg'
import userIcon from '../../icons/icon _user_.svg'
import cartIcon from '../../icons/shopping-cart-badged.svg'
import './index.css'

export function Header(){
  return (
    <header>
    <div>
      <p className='logo headline1'>Logo</p>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to={'/'} className={'headline2'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/tienda" } className={'headline2'}>Tienda</NavLink>
        </li>
        <li>
          <NavLink to={'/artistas'} className={'headline2'}>Artistas</NavLink>
        </li>
        <li>
          <NavLink to={'/contacto'} className={'headline2'}>Contacto</NavLink>
        </li>
        <li>
          <NavLink to={'/nosotros'} className={'headline2'}>Nosotros</NavLink>
        </li>
      </ul>
    </nav>
    <section className='header-right'>
      <ul>
        <li><a href="#"><img className='icon' src={searchIcon} alt="Buscar" /></a></li>
        <li><a href="#"><img className='icon' src={translateIcon} alt="Traducir" /></a></li>
        <li><a href="#"><img className='icon' src={userIcon} alt="Usuario" /></a></li>
        <li><Link to={'/carrito'}><img className='icon' src={cartIcon} alt="Carro" /></Link></li>
      </ul>
    </section>
  </header>)
}