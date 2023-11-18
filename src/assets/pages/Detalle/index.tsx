import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";
import { ProductoDetailInfo } from "../../components/ProductDetailInfo";
import defaultImg from '../../img/defaultImg.png';
import './index.css'

const Detalle = () => {

  const  { productId } = useParams<string>()
  

  return(
    <>
      <main className="detalle">
        <ProductoDetailInfo productId={productId} />
        <section className="detalle-relacionado">
          <h4>Te podría gustar</h4>
          <div className="detalle-relacionado-container">
          <ProductCard id={1} rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
          <ProductCard id={2} rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
          <ProductCard id={3} rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
          <ProductCard id={4} rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
          <ProductCard id={5} rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
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