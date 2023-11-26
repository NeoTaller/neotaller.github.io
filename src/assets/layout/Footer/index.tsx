import neotallerLogo from '../../img/NeoTaller_Logo_W.svg'
import facebookIcon from '../../icons/Facebook.svg'
import instagramIcon from '../../icons/Instagram.svg'
import whatsappIcon from '../../icons/Whatsapp.svg'
import './index.css';

export function Footer() {
  return(
    <footer>
      <img className='logo' src={neotallerLogo} alt="NeoTaller Logo" />
      <div className="footer-container">
        <div className='footer-menu'>
          <ul>
            <li className='headline3 h-regular'>Home</li>
            <li className='text1 t-regular'>Categorias</li>
            <li className='text1 t-regular'>Artistas</li>
            <li className='text1 t-regular'>Regístrate</li>
          </ul>
          <ul>
            <li className='headline3 h-regular'>Nosotros</li>
            <li className='text1 t-regular'>Quienes somos</li>
            <li className='text1 t-regular'>Nuestra misión</li>
            <li className='text1 t-regular'>Nuestra visión</li>
          </ul>
          <ul>
            <li className='headline3 h-regular'>Contacto</li>
            <li className='text1 t-regular'>Contáctanos</li>
            <li className='text1 t-regular'>Vende tu ropa</li>
            <li className='text1 t-regular'>Postula como artista</li>
            <li className='text1 t-regular'>Preguntas frecuentes</li>
          </ul>
        </div>
        <div className='footer-social'>
          <ul>
            <li><a href="#"><img className='footer-social-icon' src={instagramIcon} alt="" /></a></li>
            <li><a href="#"><img className='footer-social-icon' src={facebookIcon} alt="" /></a></li>
            <li><a href="#"><img className='footer-social-icon' src={whatsappIcon} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}