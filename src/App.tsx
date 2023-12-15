import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './assets/pages/Home/index';
import { Tienda } from './assets/pages/Tienda/index';
import { Header } from './assets/layout/Header';
import { Footer } from './assets/layout/Footer';
import { Artistas } from './assets/pages/Artistas';
import { Contacto } from './assets/pages/Contacto';
import { Nosotros } from './assets/pages/Nosotros';
import { Detalle } from './assets/pages/Detalle';
import { Carrito } from './assets/pages/Carrito';
import { Checkout } from './assets/pages/Checkout';
import { DetalleArtista } from './assets/pages/DetalleArtista';
import './App.css'


function App() {

  return (
    <>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/tienda' element={<Tienda />}/>
        <Route path='/artistas' element={<Artistas />}/>
        <Route path='/detalle-artista' element={<DetalleArtista />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/detalle'>
          <Route path='/detalle/:productId' element={<Detalle />}/>
        </Route>
        <Route path='/carrito' element={<Carrito />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
