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
  const [filtroCategoria, setFiltroCategoria] = useState<string>('')
  const [filtroTalla, setFiltroTalla] = useState<string[]>([])
  const [filtroMarca, setFiltroMarca] = useState<string[]>([])
  const [filtroArtista, setFiltroArtista] = useState<string[]>([])
  const [filtroOfertas, setFiltroOfertas] = useState<string[]>([])
  const [filtroPrecio, setFiltroPrecio] = useState<string[]>([])

  useEffect(() => {
    const getProducts = async() => {
      const data  = await getProductos()
      if(!data) return;
      setProducts(data)
    }
    getProducts()
  }, []);

  useEffect(() => {
    const getProducts = async() => {
      const data  = await getProductos()
      if(!data) return;
      if(filtroCategoria !== '') {
        setProducts(data.filter((producto) => producto.categoria == filtroCategoria))
      }else{
        setProducts(data)
      }
    }
    getProducts()
  }, [filtroCategoria]);

  useEffect(() => {
    const getProducts = async() => {
      const data  = await getProductos()
      if(!data) return;
      if(filtroTalla.length !== 0) {
        setProducts(data.filter((producto) => filtroTalla.includes(producto.talla)))
      }else{
        setProducts(data)
      }
    }
    getProducts()
  }, [filtroTalla]);
  
  useEffect(() => {
    const getProducts = async() => {
      const data  = await getProductos()
      if(!data) return;
      if(filtroMarca.length !== 0) {
        setProducts(data.filter((producto) => filtroMarca.includes(producto.marca)))
      }else{
        setProducts(data)
      }
    }
    getProducts()
  }, [filtroMarca]);

  useEffect(() => {
    const getProducts = async() => {
      const data  = await getProductos()
      if(!data) return;
      if(filtroArtista.length !== 0) {
        setProducts(data.filter((producto) => filtroArtista.includes(producto.ilustradorId)))
      }else{
        setProducts(data)
      }
    }
    getProducts()
  }, [filtroArtista]);
  
  useEffect(() => {
    const getProducts = async() => {
      const data  = await getProductos()
      if(!data) return;
      if(filtroOfertas.length !== 0) {
        setProducts(data.filter((producto) => filtroOfertas.includes(producto.oferta)))
      }else{
        setProducts(data)
      }
    }
    getProducts()
  }, [filtroOfertas]);

  useEffect(() => {
    const getProducts = async() => {
      const data  = await getProductos()
      if(!data) return;
      if(filtroPrecio.length !== 0) {
        setProducts(data.filter((producto) => filtroPrecio.includes(producto.precioNormal)))
      }else{
        setProducts(data)
      }
    }
    getProducts()
  }, [filtroPrecio]); 

  
  //Eliminar el filtro de ilustrador
  //talla, marca, artista, ofertas, precio
  


  return(
    <>
      <PageTitle titulo="Toda la tienda" breadcrum="Home > Tienda >" />
      <CategoryPicker setFilter={setFiltroCategoria}/>
      <main className="mainTienda">
        <SideBar setSelectedTallas={setFiltroTalla} setSelectedArtistas={setFiltroArtista} setSelectedMarcas={setFiltroMarca} setSelectedOfertas={setFiltroOfertas} setSelectedPrecios={setFiltroPrecio}/>
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