import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Home } from './assets/pages/Home/index';
import { Tienda } from './assets/pages/Tienda/index';
import { Detalle } from './assets/pages/Detalle/index';
import './App.css'

  const routes = createHashRouter([
    { path: '/', element: <Home />},
    { path: '/tienda', element: <Tienda />},
    { path: '/detalle', element: <Detalle />}
  ]);

function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
