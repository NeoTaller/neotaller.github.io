import { Link } from 'react-router-dom';
import { ArtistCardAlt } from '../../components/ArtistCardAlt';
import defaultImg from '../../img/defaultImg.png';
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
      <h2 className='artistas-title headline1'>Artistas</h2>
      <div className="artistas-cards-container">
        {
          artistasObj.map((a) => (
          <ArtistCardAlt rutaImg={a.rutaImg} name={a.name}/>
          ))
        }
      </div>
      <div className='artistas-contact-container'>
        <h4 className='headline1'>¡Si eres ilustrador o diseñador textil<br/> y deseas ser parte de nuestro proyecto!</h4>
        <Link to={'/contacto'} className='artistas-contact-button headline3'>Todo comienza con un click</Link>
      </div>
    </main>
  )
}

export { Artistas } 