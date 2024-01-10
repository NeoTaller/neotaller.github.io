import { CategoryCard } from '../../components/CategoryCard';
import { ProductCard } from '../../components/ProductCard';
import { ArtistCard } from '../../components/ArtistCard';
import defaultImg from '../../img/defaultImg.png';
import catAccesorios from '../../img/Categoría_accesorios.jpg'
import catJeans from '../../img/Categoría_jeans.jpg'
import catJoggers from '../../img/Categoría_jogger.jpg'
import catPoleras from '../../img/Categoría_poleras.jpg' 
import catVestidos from '../../img/Categoría_Vestidos.jpg'
import catZapatos from '../../img/Categoría_zapatos.jpg'
import catChaquetas from '../../img/Categorías_chaqueta.jpg'
import catPolerones from '../../img/Polerón_categoría.jpg'
import artista1 from '../../img/artistas/2.png'
import artista2 from '../../img/artistas/16.png'
import artista3 from '../../img/artistas/15.png'
import artista4 from '../../img/artistas/1.png'
import artista5 from '../../img/artistas/3.png'
import artista6 from '../../img/artistas/4.png'
import artista7 from '../../img/artistas/5.png'
import artista8 from '../../img/artistas/6.png'
import homeBanner from '../../img/Home.png';
import './index.css'
import { useEffect, useState } from 'react';
import { GetProducts } from '../../../interfaces/Products';
import { getProductosHome1, getProductosHome2 } from '../../../services/productos';



const Home = () => {

const [productosA, setProductosA] = useState<GetProducts[]>([])
const [productosB, setProductosB] = useState<GetProducts[]>([])

useEffect(() => {
  const getProductsA = async() => {
    const data  = await getProductosHome1()
    if(!data) return;
    setProductosA(data)
  }
  getProductsA()
}, []);

useEffect(() => {
  const getProductsB = async() => {
    const data  = await getProductosHome2()
    if(!data) return;
    setProductosB(data)
  }
  getProductsB()
}, []);


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
            <img src={homeBanner} alt="Imagen prueba" />
          </div>
        </div>
        <span className='hero-rarrow'>{'>'}</span>
      </section>
      <section className='hoy'>
        <h3 className='headline1 h-bold'>¿Qué buscas hoy?</h3>
        <div className='hoy-categorias'>
          <CategoryCard rutaImg={catPoleras} name={'Poleras'}></CategoryCard>
          <CategoryCard rutaImg={catJeans} name={'Jeans'}></CategoryCard>
          <CategoryCard rutaImg={catChaquetas} name={'Chaquetas'}></CategoryCard>
          <CategoryCard rutaImg={catVestidos} name={'Vestidos'}></CategoryCard>
          <CategoryCard rutaImg={catZapatos} name={'Zapatos'}></CategoryCard>
          <CategoryCard rutaImg={catJoggers} name={'Joggers'}></CategoryCard>
          <CategoryCard rutaImg={catAccesorios} name={'Accesorios'}></CategoryCard>
          <CategoryCard rutaImg={catPolerones} name={'Polerones'}></CategoryCard>
        </div>
      </section>
      {/* =================== NOVEDADES ============================================= */}
      <section className='novedades'>
        <h2 className='headline1 h-bold'>Recién llegados</h2>
        <div className='novedades-cardContainer'>
          {
            productosA.map((producto) => {
              return(
                <ProductCard 
                  key={producto.id}
                  id={producto.id}
                  img1={producto.img1 ? producto.img1 : defaultImg} 
                  talla={producto.talla}
                  nombre={producto.nombre} 
                  descripcion={producto.descripcion} 
                  precioNormal={producto.precioNormal}
                />
              )
            })
          }
        </div>
      </section>
      {/* ===================== OFERTAS ==========================================*/}
      <section className='ofertas'>
        <h2 className='headline1 h-bold'>Ofertas del mes</h2>
        <div className='novedades-cardContainer'>
        {
            productosB.map((producto) => {
              return(
                <ProductCard 
                  key={producto.id}
                  id={producto.id}
                  img1={producto.img1 ? producto.img1 : defaultImg} 
                  talla={producto.talla}
                  nombre={producto.nombre} 
                  descripcion={producto.descripcion} 
                  precioNormal={producto.precioNormal}
                />
              )
            })
          }
        </div>
      </section>
      {/* ============== ARTISTAS ==================== */}
      <section className='home-artistas'>
        <h3 className='headline1 h-bold'>Conoce a nuestros artistas</h3>
        <p className='headline1 t-medium'>Una gran variedad de artistas y diseñadores de moda</p>
        <section className='artistas-cards--container'>
          <ArtistCard rutaImg={artista1} name='Jimena Ilustra'></ArtistCard>
          <ArtistCard rutaImg={artista2} name='ung fio'></ArtistCard>
          <ArtistCard rutaImg={artista3} name='sukinpan'></ArtistCard>
          <ArtistCard rutaImg={artista4} name='no.nonino'></ArtistCard>
          <ArtistCard rutaImg={artista5} name='Hoshibunn'></ArtistCard>
          <ArtistCard rutaImg={artista6} name='Nemupan'></ArtistCard>
          <ArtistCard rutaImg={artista7} name='Pulpali'></ArtistCard>
          <ArtistCard rutaImg={artista8} name='Chico Crucial'></ArtistCard>
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