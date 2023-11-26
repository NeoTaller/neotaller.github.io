import { CategoryCard } from '../../components/CategoryCard';
import { ProductCard } from '../../components/ProductCard';
import { ArtistCard } from '../../components/ArtistCard';
import defaultImg from '../../img/defaultImg.png';
import './index.css'


const Home = () => {
  return (
    <main className='home-main'>
      <section className='hero'>
        <span className='hero-larrow'>{'<'}</span>
        <div className='hero-info'>
          <div className='hero-info--left'>
            <h1>Título</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quas eius laudantium voluptatem qui porro nisi tempore totam quod libero nihil necessitatibus, provident fugiat quibusdam aut quaerat vero molestias. Eligendi?</p>
            <button>Call to action</button>
          </div>
          <div className='hero-info--right'>
            <img src={defaultImg} alt="Imagen prueba" />
          </div>
        </div>
        <span className='hero-rarrow'>{'>'}</span>
      </section>
      <section className='hoy'>
        <h3>¿Qué buscas hoy?</h3>
        <div className='hoy-categorias'>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 1'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 2'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 3'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 4'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 5'}></CategoryCard>
        </div>
      </section>
      {/* =================== NOVEDADES ============================================= */}
      <section className='novedades'>
        <h2>Recién llegados</h2>
        <div className='novedades-cardContainer'>
          <ProductCard id={1} rutaImg={defaultImg} title={'Prenda 1'} description={'Descripción de prenda 1. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='10990'></ProductCard>
          <ProductCard id={2} rutaImg={defaultImg} title={'Prenda 2'} description={'Descripción de prenda 2. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='20000'></ProductCard>
          <ProductCard id={3} rutaImg={defaultImg} title={'Prenda 3'} description={'Descripción de prenda 3. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='45000'></ProductCard>
          <ProductCard id={4} rutaImg={defaultImg} title={'Prenda 4'} description={'Descripción de prenda 4. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='10000'></ProductCard>
          <ProductCard id={5} rutaImg={defaultImg} title={'Prenda 5'} description={'Descripción de prenda 5. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='37990'></ProductCard>
        </div>
      </section>
      {/* ===================== OFERTAS ==========================================*/}
      <section className='ofertas'>
        <h2>Ofertas del mes</h2>
        <div className='novedades-cardContainer'>
          <ProductCard id={6} rutaImg={defaultImg} title={'Prenda 6'} description={'Descripción de prenda 6. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='15990'></ProductCard>
          <ProductCard id={7} rutaImg={defaultImg} title={'Prenda 7'} description={'Descripción de prenda 7. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='48990'></ProductCard>
          <ProductCard id={8} rutaImg={defaultImg} title={'Prenda 8'} description={'Descripción de prenda 8. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='24990'></ProductCard>
          <ProductCard id={9} rutaImg={defaultImg} title={'Prenda 9'} description={'Descripción de prenda 9. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='16990'></ProductCard>
          <ProductCard id={10} rutaImg={defaultImg} title={'Prenda 10'} description={'Descripción de prenda 10. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='8990'></ProductCard>
        </div>
      </section>
      {/* ============== ARTISTAS ==================== */}
      <section className='home-artistas'>
        <section className='artistas-info--container'>
          <h2>Conoce a nuestros artistas</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quos eum reprehenderit labore dolorum totam voluptates, explicabo porro ratione asperiores aliquid dolor, delectus, ipsam quam impedit quis? Animi, nobis harum.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam doloremque quibusdam tempora eveniet blanditiis, quod id magni fugiat, suscipit ea repellendus! Hic obcaecati nemo a ad quidem maxime maiores dolores!</p>
        </section>
        <section className='artistas-info--pictures'>
          <span className='hero-larrow'>{'<'}</span>
          <div className="artistas-cards--container">
            <ArtistCard rutaImg={defaultImg} name='Artista Uno'></ArtistCard>
            <ArtistCard rutaImg={defaultImg} name='Artista Dos'></ArtistCard>
            <ArtistCard rutaImg={defaultImg} name='Artista Tres'></ArtistCard>
            <ArtistCard rutaImg={defaultImg} name='Artista Cuatro'></ArtistCard>
            <ArtistCard rutaImg={defaultImg} name='Artista Cinco'></ArtistCard>
            <ArtistCard rutaImg={defaultImg} name='Artista Seis'></ArtistCard>

          </div>
          <span className='hero-rarrow'>{'>'}</span>
        </section>
      </section>
      {/* ============= NEWSLETTER OFERTAS ================== */}
      <section className='formulario-ofertas'>
        <h2>
          Aprovecha nuestras ofertas exclusivas!
        </h2>
        <p>Regístrate con nosotros y aprovecha miles de descuentos y otros beneficios!</p>
        <button>Registrarme</button>
      </section>
      {/* ============ FORMULARIO VENTA ================ */}
      <section className='formulario-venta'>
        <h2>
          ¿Quieres vender tu ropa?
        </h2>
        <button>Contáctanos!</button>
      </section>
    </main>
  )
}


export { Home };