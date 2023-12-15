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
            <p className='headline2 h-bold'>Somos</p>
            <h1 className='headline1 h-bold'>Neo-taller</h1>
            <p className='headline2 h-bold'>La nueva forma de vestir</p>
            <button className='headline2 h-bold'>Visita la tienda</button>
          </div>
          <div className='hero-info--right'>
            <img src={defaultImg} alt="Imagen prueba" />
          </div>
        </div>
        <span className='hero-rarrow'>{'>'}</span>
      </section>
      <section className='hoy'>
        <h3 className='headline1 h-bold'>¿Qué buscas hoy?</h3>
        <div className='hoy-categorias'>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 1'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 2'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 3'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 4'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 5'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 6'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 7'}></CategoryCard>
          <CategoryCard rutaImg={defaultImg} name={'Categoría 8'}></CategoryCard>
        </div>
      </section>
      {/* =================== NOVEDADES ============================================= */}
      <section className='novedades'>
        <h2 className='headline1 h-bold'>Recién llegados</h2>
        <div className='novedades-cardContainer'>
          <ProductCard id={1} rutaImg={defaultImg} title={'Prenda 1'} talla={'XL'} price='10990'></ProductCard>
          <ProductCard id={2} rutaImg={defaultImg} title={'Prenda 2'} talla={'XL'} price='20000'></ProductCard>
          <ProductCard id={3} rutaImg={defaultImg} title={'Prenda 3'} talla={'XL'} price='45000'></ProductCard>
          <ProductCard id={4} rutaImg={defaultImg} title={'Prenda 4'} talla={'XL'} price='10000'></ProductCard>
          <ProductCard id={5} rutaImg={defaultImg} title={'Prenda 5'} talla={'XL'} price='10990'></ProductCard>
          <ProductCard id={6} rutaImg={defaultImg} title={'Prenda 6'} talla={'XL'} price='20000'></ProductCard>
          <ProductCard id={7} rutaImg={defaultImg} title={'Prenda 7'} talla={'XL'} price='45000'></ProductCard>
          <ProductCard id={8} rutaImg={defaultImg} title={'Prenda 8'} talla={'XL'} price='10000'></ProductCard>
        </div>
      </section>
      {/* ===================== OFERTAS ==========================================*/}
      <section className='ofertas'>
        <h2 className='headline1 h-bold'>Ofertas del mes</h2>
        <div className='novedades-cardContainer'>
          <ProductCard id={9} rutaImg={defaultImg} title={'Prenda 9'} talla={'XL'} price='15990'></ProductCard>
          <ProductCard id={10} rutaImg={defaultImg} title={'Prenda 10'} talla={'XL'} price='48990'></ProductCard>
          <ProductCard id={11} rutaImg={defaultImg} title={'Prenda 11'} talla={'XL'} price='24990'></ProductCard>
          <ProductCard id={12} rutaImg={defaultImg} title={'Prenda 12'} talla={'XL'} price='16990'></ProductCard>
          <ProductCard id={13} rutaImg={defaultImg} title={'Prenda 13'} talla={'XL'} price='15990'></ProductCard>
          <ProductCard id={14} rutaImg={defaultImg} title={'Prenda 14'} talla={'XL'} price='48990'></ProductCard>
          <ProductCard id={15} rutaImg={defaultImg} title={'Prenda 15'} talla={'XL'} price='24990'></ProductCard>
          <ProductCard id={16} rutaImg={defaultImg} title={'Prenda 16'} talla={'XL'} price='16990'></ProductCard>
        </div>
      </section>
      {/* ============== ARTISTAS ==================== */}
      <section className='home-artistas'>
        <h3 className='headline1 h-bold'>Conoce a nuestros artistas</h3>
        <p className='headline1 t-medium'>Una gran variedad de artistas y diseñadores de moda</p>
        <section className='artistas-cards--container'>
          <ArtistCard rutaImg={defaultImg} name='Artista Uno'></ArtistCard>
          <ArtistCard rutaImg={defaultImg} name='Artista Dos'></ArtistCard>
          <ArtistCard rutaImg={defaultImg} name='Artista Tres'></ArtistCard>
          <ArtistCard rutaImg={defaultImg} name='Artista Cuatro'></ArtistCard>
          <ArtistCard rutaImg={defaultImg} name='Artista Cinco'></ArtistCard>
          <ArtistCard rutaImg={defaultImg} name='Artista Seis'></ArtistCard>
          <ArtistCard rutaImg={defaultImg} name='Artista Siete'></ArtistCard>
          <ArtistCard rutaImg={defaultImg} name='Artista Ocho'></ArtistCard>
        </section>
        <p className='headline1 t-medium'>Y muchos otros....Conócelos aquí</p>
      </section>
      {/* ============ FORMULARIO VENTA ================ */}
      <section className='formulario-venta'>
        <h2 className='headline1 h-semibold'>¿Quieres vender tu ropa?</h2>
        <p className='headline2 h-regular'>¡Compramos la ropa en buen estado que ya no quieras usar!</p>
        <button className='headline3 h-semibold'>¡Obvio que si!</button>
      </section>
      {/* ============= NEWSLETTER OFERTAS ================== */}
      <section className='formulario-ofertas'>
        <h2 className='headline1 h-semibold'>Aprovecha nuestras ofertas exclusivas</h2>
        <p className='headline2 h-regular'>Regístrate con nosotros y aprovecha miles de descuentos y otros beneficios!</p>
        <button className='headline3 h-semibold'>¡Obvio que si!</button>
      </section>
    </main>
  )
}


export { Home };