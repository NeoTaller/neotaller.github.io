import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import { ProductCard } from "../../components/ProductCard";
import { ProductoDetailInfo } from "../../components/ProductDetailInfo";
import defaultImg from '../../img/defaultImg.png';
import './index.css'

const Detalle = () => {

  return(
    <>
      <main className="detalle">
        <ProductoDetailInfo />
        <section className="detalle-relacionado">
          <h4>Te podría gustar</h4>
          <div className="detalle-relacionado-container">
          <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
          <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
          <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
          <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
          <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
          </div>
        </section>
        <section className="detalle-registro">
          <h4>¡Recibe un cupón de 15% de descuento!</h4>
          <div className="detaller-registro-form">
            <input type="email" placeholder="email@midominio.com" />
            <button>Call to action</button>
          </div>
        </section>
      </main>
    </>
  )
}

export { Detalle }