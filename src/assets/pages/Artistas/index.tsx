import { Link } from 'react-router-dom';
import defaultImg from '../../img/defaultImg.png';
import { ArtistCard } from '../../components/ArtistCard';
import './index.css'

const artistasObj = [
  {rutaImg: defaultImg, name: 'Artista 1'},
  {rutaImg: defaultImg, name: 'Artista 2'},
  {rutaImg: defaultImg, name: 'Artista 3'},
  {rutaImg: defaultImg, name: 'Artista 4'},
  {rutaImg: defaultImg, name: 'Artista 5'},
  {rutaImg: defaultImg, name: 'Artista 6'},
  {rutaImg: defaultImg, name: 'Artista 7'},
  {rutaImg: defaultImg, name: 'Artista 8'},
  {rutaImg: defaultImg, name: 'Artista 9'},
  {rutaImg: defaultImg, name: 'Artista 10'},
  {rutaImg: defaultImg, name: 'Artista 11'},
  {rutaImg: defaultImg, name: 'Artista 12'},
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