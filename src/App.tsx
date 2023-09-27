import { useRoutes, HashRouter } from 'react-router-dom';
import { Home } from './assets/pages/Home/index';
import { Tienda } from './assets/pages/Tienda/index';
import { Detalle } from './assets/pages/Detalle/index';
import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/Tienda', element: <Tienda />},
    { path: '/Detalle', element: <Detalle />}
  ])
  return routes
}

function App() {

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
   
  )
}

export default App
