import './index.css';

export function Footer() {
  return(
    <footer>
    <div className='footer-info'>
      <a className='logo headline1' href="#">Logo</a>
      <p className='text2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='footer-menu'>
      <ul>
        <li><a className='text1' href="#">Home</a></li>
        <li><a className='text1' href="#">Contacto</a></li>
        <li><a className='text1' href="#">Información</a></li>
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