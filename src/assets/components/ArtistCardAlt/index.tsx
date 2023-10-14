import { Link } from 'react-router-dom';
import './index.css';

interface ArtistInfo {
  rutaImg: string;
  name: string;
}


export function ArtistCardAlt(artist: ArtistInfo){

  return(
    <div className='card-artista-alt'>
      <img src={artist.rutaImg} alt="" />
      <Link to={'/detalle-artista'} className='card-artista--name'>
        {artist.name}
      </Link>
    </div>
  )
}
