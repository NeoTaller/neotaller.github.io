import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import defaultImg from '../../img/defaultImg.png';
import instagram from '../../icons/instagram-original.svg'
import facebook from '../../icons/facebook.svg'
import './index.css'

const destacadosArtista = [{
  rutaImg: defaultImg,
  title: 'Producto 1',
  description: 'Lorem ipsum dolor sit amet consectetur.',
  price: '$10000',
},
{
  rutaImg: defaultImg,
  title: 'Producto 2',
  description: 'Lorem ipsum dolor sit amet consectetur.',
  price: '$20000',
},
{
  rutaImg: defaultImg,
  title: 'Producto 3',
  description: 'Lorem ipsum dolor sit amet consectetur.',
  price: '$30000',
},
{
  rutaImg: defaultImg,
  title: 'Producto 4',
  description: 'Lorem ipsum dolor sit amet consectetur.',
  price: '$40000',
},
{
  rutaImg: defaultImg,
  title: 'Producto 5',
  description: 'Lorem ipsum dolor sit amet consectetur.',
  price: '$50000',
},
{
  rutaImg: defaultImg,
  title: 'Producto 6',
  description: 'Lorem ipsum dolor sit amet consectetur.',
  price: '$60000',
}
]

const DetalleArtista = () => {
  return (
    <>
      <section className='da-info'>
        <section className='da-info-datos'>
          <figure className='datos-img-bg'>
            <img src={defaultImg} alt="Artista 1" />
          </figure>
          <div className="da-info-nombres">
            <h2 className='headline1'>Nombre Ilustrador</h2>
            <p className='text2'>Pequeña descripción del artista para conocerlo mejor</p>
          </div>
          <div className='da-info-rrss'>
            <div className='rrss-logos'>
              <img src={instagram} alt="red1" />
              <img src={facebook} alt="red2" />
              <img src={instagram} alt="red3" />
              <img src={facebook} alt="red4" />
            </div>
            <p className='text2'>No olvides apoyarle en sus redes!</p>
          </div>
        </section>
        <section className="da-info-galeria">
          <div className='galeria-imgs'>
            <span className='headline1'>{'<'}</span>
            <img src={defaultImg} alt="ilustracion 1" />
            <span className='headline1'>{'>'}</span>
          </div>
          <div className='ball-selector'>
            <span className="pelotita p-activa">.</span>
            <span className="pelotita"></span>
            <span className="pelotita"></span>
            <span className="pelotita"></span>
            <span className="pelotita"></span>
            <span className="pelotita"></span>
            <span className="pelotita"></span>
            <span className="pelotita"></span>
          </div>
        </section>
      </section>
      <section className='da-destacadas'>
        <h3 className='headline1'>Prendas destacadas de Nombre Ilustrador</h3>
        <div className="destacadas-container">
          {
            destacadosArtista.map((producto) => (
              <ProductCard 
              rutaImg={producto.rutaImg}
              title={producto.title}
              description={producto.description}
              price={producto.price}
              />
            ))
          }
        </div>
      </section>
      <section className='da-coleccion'>
        <h4 className='headline1'>Si quedaste con gusto a poco te invitamos a <br />revisar toda su colección</h4>
        <Link to={'/tienda'} className='artistas-contact-button headline3'>Ver más de este artista</Link>
      </section>
    </>
  )
}

export { DetalleArtista }