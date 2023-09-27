import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CategoryCard } from '../../components/CategoryCard';
import { ProductCard } from '../../components/ProductCard';
import { ArtistCard } from '../../components/ArtistCard';
import defaultImg from '../img/defaultImg.png';


const Home = () => {
  return (
    <>
         <Header></Header>
         <main>
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
               <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
               <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
               <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
               <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
               <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
             </div>
           </section>
           {/* ===================== OFERTAS ==========================================*/}
           <section className='ofertas'>
             <h2>Ofertas del mes</h2>
             <div className='novedades-cardContainer'>
               <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
               <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
               <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
               <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
               <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
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
         {/* ======================== FOOTER =================================================== */}
         <Footer></Footer>
       </>
  )
}


export { Home };