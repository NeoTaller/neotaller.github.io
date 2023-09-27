import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from './assets/pages/Home/Home';
import { Tienda } from './assets/pages/Tienda/Tienda';
import { Detalle } from './assets/pages/Detalle/Detalle';
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/Tienda', element: <Tienda />},
    { path: '/Detalle', element: <Detalle />}
  ])
  return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
   
  )
}

export default App
