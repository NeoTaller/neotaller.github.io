import { useEffect, useState } from "react";
import { SideBar } from "../../components/SideBar"
import { ProductCard } from "../../components/ProductCard";
import defaultImg from '../../img/defaultImg.png';
import './index.css'
import { getProductos } from "../../../services/productos";
import { GetProducts } from '../../../interfaces/Products';
import { PageTitle } from "../../components/PageTitle";
import { CategoryPicker } from "../../components/CategoryPicker";


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
  
  //Eliminar el filtro de ilustrador

  return(
    <>
      <PageTitle titulo="Toda la tienda" breadcrum="Home > Tienda >" />
      <CategoryPicker />
      <main className="mainTienda">
        <SideBar></SideBar>
        <section className="productos">
          <section className="card-container">
            {
              products.map((producto) => 
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
            }
          </section> 
        </section>
      </main>
    </>
  )
}

export { Tienda }