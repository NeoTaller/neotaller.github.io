import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideBar } from "../../components/SideBar"
import { ProductCard } from "../../components/ProductCard";
import defaultImg from '../../img/defaultImg.png';
import './index.css'

const Tienda = () => {

  return(
    <>
      <Header></Header>
      <main className="mainTienda">
        <SideBar></SideBar>
        <section className="productos">
          <div className="categorias">
            <div className="categoriaRound">
              <div className="img-container">
                <img src={defaultImg} alt="" />
              </div>
              <p>Todo</p>
            </div>
            <div className="categoriaRound">
              <div className="img-container">
                <img src={defaultImg} alt="" />
              </div>
              <p>Poleras</p>
            </div>
            <div className="categoriaRound">
              <div className="img-container">
                <img src={defaultImg} alt="" />
              </div>
              <p>Jeans</p>
            </div>
            <div className="categoriaRound">
              <div className="img-container">
                <img src={defaultImg} alt="" />
              </div>
              <p>Chaquetas</p>
            </div>
            <div className="categoriaRound">
              <div className="img-container">
                  <img src={defaultImg} alt="" />
                </div>
                <p>Vestidos</p>
            </div>
            <div className="categoriaRound">
              <div className="img-container">
                  <img src={defaultImg} alt="" />
                </div>
                <p>Zapatillas</p>
            </div>
          </div>
          <section className="card-container">
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
            <ProductCard rutaImg={defaultImg} title={'Nombre Prenda'} description={'Descripción de prenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} price='999.999'></ProductCard>
          </section>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export { Tienda }