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
      <span className='card-artista--name'>
        {artist.name}
      </span>
    </div>
  )
}
