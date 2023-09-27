import { Link } from 'react-router-dom'
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
        <li><a href="#">🔎</a></li>
        <li><a href="#">🔠</a></li>
        <li><a href="#">👤</a></li>
        <li><a href="#">🛒</a></li>
      </ul>
    </section>
  </header>)
}