import { Link } from 'react-router-dom'
import './index.css'
import { Faq } from '../../components/Faq'
import defaultImg from '../../img/defaultImg.png'
import mailIco from '../../icons/mail-send-envelope.svg'
import whatsIco from '../../icons/whatsapp.svg'
import igIco from '../../icons/instagram-original.svg'
import fbIco from '../../icons/facebook.svg'
import clockIco from '../../icons/circle-clock.svg'

const Contacto = () => {

  return (
    <main className='contacto-main'>
      <div className='contacto-title'>
        <h2 className='headline1'>Contacto</h2>
      </div>
      <section className='contacto-faq'>
        <h3 className='headline1'>¿Tienes Preguntas?</h3>
        <div className='contacto-faq-bajada'>
          <h4 className='headline3'>Revisa nuestras preguntas frecuentes</h4>
          <p className='text4'>Si no encuentras lo que buscas puedes enviarnos un mensaje</p>
        </div>
        <section className='faq-container'>
          <Faq titulo={'Pregunta 1'} mensaje={'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'}/>
          <Faq titulo={'Pregunta 2'} mensaje={'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'}/>
          <Faq titulo={'Pregunta 3'} mensaje={'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'}/>
          <Faq titulo={'Pregunta 4'} mensaje={'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'}/>
        </section>
      </section>
      <section className='contacto-form'>
        <form>
          <h3 className='headline1'>¡Contáctanos!</h3>
          <p className='headline3'>Hablemos :), te contactaremos lo más rápido posible</p>
          <label className='headline4' htmlFor="nombre">Nombre</label>
          <input type="text" name='nombre' id='nombre' />
          <label className='headline4' htmlFor="mail">Email</label>
          <input type="email" name='mail' id='mail' />
          <label className='headline4' htmlFor="mensaje">Mensaje</label>
          <textarea name="mensaje" id="mensaje" cols={30} rows={10}></textarea>
        </form>
        <aside className='contacto-banner'>
          <div className='contacto-coordenadas'>
            <aside>
              <img src={mailIco} alt="email icon" />
              <p className='headline4'>email@email.com</p>
            </aside>
            <aside>
              <img src={whatsIco} alt="whastapp icon" />
              <p className='headline4'>+56 9 12345678</p>
            </aside>
            <aside>
              <img src={igIco} alt="instagram icon" />
              <p className='headline4'>@usuarioInstagram</p>
            </aside>
            <aside>
              <img src={fbIco} alt="facebook icon" />
              <p className='headline4'>UsuarioFacebook</p>
            </aside>
            <aside>
              <img src={clockIco} alt="horario icon" />
              <p className='headline4'>Horario de atención</p>
            </aside>
          </div>
          <div className='contacto-banner-imgContainer'>
            <img src={defaultImg} alt="" />
          </div>
        </aside>
      </section>
      <section className='contacto-ropa'>
        <div className="contacto-ropa-container">
          <h3 className='headline1'>¿Quieres vender tu ropa?</h3>
          <Link to={'/'} className='headline3'>Sí, quiero</Link>
        </div>
      </section>
      <section className='contacto-artista'>
        <div className="contacto-artista-container">
          <h3 className='headline1'>¿Quieres ser parte de nuestros artistas?</h3>
          <Link to={'/'} className='headline3'>Sí, quiero</Link>
        </div>
      </section>
    </main>
  )
}

export { Contacto } 