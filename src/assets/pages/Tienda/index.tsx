import { useEffect, useState } from "react";
import { SideBar } from "../../components/SideBar"
import { ProductCard } from "../../components/ProductCard";
import defaultImg from '../../img/defaultImg.png';
import './index.css'
import { getProductos } from "../../../services/productos";
import { GetProducts } from '../../../interfaces/Products';

const Tienda = () => {

  const [products, setProducts] = useState<GetProducts[]>([])

  useEffect(() => {
    const getProducts = async() => {
      const data  = await getProductos()
      if(!data) return;
      setProducts(data)
    }
    getProducts()
  }, []);
  

  return(
    <>
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
            {
              products.map(({id, nombre, descripcion, precio}) => 
                <ProductCard 
                  key={id}
                  rutaImg={defaultImg} 
                  title={nombre} 
                  description={descripcion} 
                  price={precio}
                />
              ) 
            }
          </section> 
        </section>
      </main>
    </>
  )
}

export { Tienda }