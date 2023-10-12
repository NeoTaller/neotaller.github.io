import { ArtistCard } from '../../components/ArtistCard'
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
  {rutaImg: defaultImg, name: 'Artista 13'},
  {rutaImg: defaultImg, name: 'Artista 14'},
  {rutaImg: defaultImg, name: 'Artista 15'},
  {rutaImg: defaultImg, name: 'Artista 16'},
]

const Artistas = () => {
  return (
    <main className="artistas-main">
      <h2 className='artistas-title headline1'>Artistas</h2>
      {
        artistasObj.map((a) => (<span className="cuadrado p1"><ArtistCard rutaImg={a.rutaImg} name={a.name}/></span>
        ))
      }
    </main>
  )
}

export { Artistas } 