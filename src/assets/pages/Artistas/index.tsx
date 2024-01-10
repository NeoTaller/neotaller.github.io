import { Link } from 'react-router-dom';
import { ArtistCard } from '../../components/ArtistCard';
import artista1 from '../../img/artistas/2.png'
import artista2 from '../../img/artistas/16.png'
import artista3 from '../../img/artistas/15.png'
import artista4 from '../../img/artistas/1.png'
import artista5 from '../../img/artistas/3.png'
import artista6 from '../../img/artistas/4.png'
import artista7 from '../../img/artistas/5.png'
import artista8 from '../../img/artistas/6.png'
import artista9 from '../../img/artistas/7.png'
import artista10 from '../../img/artistas/8.png'
import artista11 from '../../img/artistas/9.png'
import artista12 from '../../img/artistas/10.png'
import artista13 from '../../img/artistas/11.png'
import artista14 from '../../img/artistas/12.png'
import artista15 from '../../img/artistas/13.png'
import artista16 from '../../img/artistas/14.png'
import './index.css'


const artistasObj = [
  {rutaImg: artista1, name: 'Jimena Ilustra'},
  {rutaImg: artista2, name: 'ung fio'},
  {rutaImg: artista3, name: 'sukinpan'},
  {rutaImg: artista4, name: 'no.nonino'},
  {rutaImg: artista5, name: 'Hoshibunn'},
  {rutaImg: artista6, name: 'Nemupan'},
  {rutaImg: artista7, name: 'Pulpali'},
  {rutaImg: artista8, name: 'Chico Crucial'},
  {rutaImg: artista9, name: 'Tokyo Monster'},
  {rutaImg: artista10, name: 'Daniela William'},
  {rutaImg: artista11, name: 'Mokaccino'},
  {rutaImg: artista12, name: 'Amelia Strong'},
  {rutaImg: artista13, name: 'Pabloti'},
  {rutaImg: artista14, name: 'Dibujame'},
  {rutaImg: artista15, name: 'No plans'},
  {rutaImg: artista16, name: 'Dos lobos'},
]

const Artistas = () => {
  return (
    <main className="artistas-main">
      <h2 className='artistas-title headline1 h-semibold '>Nuestros Artistas</h2>
      <h3 className='headline2 h-semibold h3center'>!Aquí podrás encontrar a una gran variedad de artistas, incluyendo Ilustradores y Diseñadores de moda!</h3>
      <p className='text3 t-regular center'> te invitamos a conocerlos, solo entra a su perfil y deléitate con sus obras y colecciones de ropa que tenemos para ti </p>
      <div className="artistas-cards-container">
        {
          artistasObj.map((a) => (
          <ArtistCard rutaImg={a.rutaImg} name={a.name}/>
          ))
        }
      </div>
      <div className='artistas-contact-container'>
        <h4 className='headline1 h-semibold'>Si eres ilustrador o diseñador textil<br/> y deseas ser parte de nuestro proyecto...</h4>
        <Link to={'/contacto'} className='artistas-contact-button'>
          <span className='headline3 h-semibold'>¡Postula aquí!</span>
        </Link>
      </div>
    </main>
  )
}

export { Artistas } 