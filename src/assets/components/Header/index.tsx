import './index.css'

export function Header(){
  return (
    <header>
    <div>
    <a className='logo' href="#">Logo</a>
    </div>
    <nav>
      <ul>
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Artitas</a></li>
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