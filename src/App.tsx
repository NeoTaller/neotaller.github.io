import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './assets/pages/Home/index';
import { Tienda } from './assets/pages/Tienda/index';
// import { Detalle } from './assets/pages/Detalle/index';
import './App.css'
import { Header } from './assets/layout/Header';
import { Footer } from './assets/layout/Footer';
import { Artistas } from './assets/pages/Artistas';
import { Contacto } from './assets/pages/Contacto';
import { Nosotros } from './assets/pages/Nosotros';


function App() {

  return (
    <>
    <HashRouter basename='/'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/tienda' element={<Tienda />}/>
        <Route path='/artistas' element={<Artistas />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
      </Routes>
      <Footer />
    </HashRouter>
    </>
  )
}

export default App
