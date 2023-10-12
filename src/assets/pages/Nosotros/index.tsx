import './index.css'
import defaultImg from '../../img/defaultImg.png'
import { Link } from 'react-router-dom'
const Nosotros = () => {
  return (
    <main className='nosotros-main'>
      <section className='nosotros-title'>
        <h2 className='headline1'>Nosotros</h2>
      </section>
      <section className='grid-container'>
        <aside>
          <h4 className='headline1'>Quienes Somos</h4>
          <p className='text2'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
        </aside>
        <figure>
          <img className='nosotros-img' src={defaultImg} alt="" />
        </figure>
        <figure>
          <img className='nosotros-img' src={defaultImg} alt="" />
        </figure>
        <aside>
          <h4 className='headline1'>Nuestra misión</h4>
          <p className='text2'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
        </aside>
        <aside>
          <h4 className='headline1'>Nuestra visión</h4>
          <p className='text2'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
        </aside>
        <figure>
          <img className='nosotros-img' src={defaultImg} alt="" />
        </figure>
      </section>
      <section className='nosotros-contacto'>
        <h4 className='headline1'>¿Sugerencias? ¿Dudas? ¿Reclamos?</h4>
        <Link to={'/contacto'} className='headline3'>Contáctanos</Link>
      </section>
    </main>
  )
}

export { Nosotros } 