import './index.css';

interface ArtistInfo {
  rutaImg: string;
  name: string;
}


export function ArtistCard(artist: ArtistInfo){

  return(
    <div className='card-artista'>
      <figure className='card-artista--img'>
        <img src={artist.rutaImg} alt="" />
      </figure>
      <span className='headline3 h-medium'>
        {artist.name}
      </span>
    </div>
  )
}
