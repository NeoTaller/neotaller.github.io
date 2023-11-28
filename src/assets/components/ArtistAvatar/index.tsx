import { useNavigate } from 'react-router-dom';
import './index.css';

interface ArtistInfo {
  rutaImg: string;
  name: string;
}


export function ArtistAvatar(artist: ArtistInfo){

  const navigate = useNavigate();
  
  return(
    <div className='artist-avatar' onClick={()=>navigate('/detalle-artista')}>
      <div className='artist-avatar-frame'>
        <figure className='artist-avatar-figure'>
          <img src={artist.rutaImg} alt="Foto perfil artista" />
        </figure>
      </div>
      <h4 className='artist-avatar-nombre h-medium'>
        {artist.name}
      </h4>
    </div>
  )
}
