import './index.css';

export function Footer() {
  return(
    <footer>
    <div className='footer-info'>
      <a className='logo' href="#">Logo</a>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='footer-menu'>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Información</a></li>
      </ul>
    </div>
    <div className='footer-social'>
      <ul>
        <li><a href="#">F</a></li>
        <li><a href="#">Ig</a></li>
        <li><a href="#">X</a></li>
        <li><a href="#">W</a></li>
      </ul>
    </div>
  </footer>
  )
}