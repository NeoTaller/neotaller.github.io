import { Link } from 'react-router-dom'
import  searchIcon from '../../icons/icon _search normal 1_.svg'
import translateIcon from '../../icons/icon _translate_.svg'
import userIcon from '../../icons/icon _user_.svg'
import cartIcon from '../../icons/shopping-cart-badged.svg'
import './index.css'

export function Header(){
  return (
    <header>
    <div>
    <Link className='logo' to={"/"}>Logo</Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link to={"/tienda"}>Tienda</Link>
        </li>
        <li><a href="#">Artistas</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Nosotros</a></li>
      </ul>
    </nav>
    <section className='header-right'>
      <ul>
        <li><a href="#"><img className='icon' src={searchIcon} alt="Buscar" /></a></li>
        <li><a href="#"><img className='icon' src={translateIcon} alt="Traducir" /></a></li>
        <li><a href="#"><img className='icon' src={userIcon} alt="Usuario" /></a></li>
        <li><a href="#"><img className='icon' src={cartIcon} alt="Carro" /></a></li>
      </ul>
    </section>
  </header>)
}