import { FilterDropdown } from '../FilterDropdown'
import './index.css'

const SideBar = () => {

  const tallas = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const marcas = ['Marca 1', 'Marca 2', 'Marca 3', 'Marca 4']
  const artistas = ['Artista 1', 'Artista 2', 'Artista 3', 'Artista 4']
  const ofertas = ['10%', '20%', '30%', '40%', '50%', '60% o más']
  const precios = ['Menos de $100', '$100 - $200', '$200 - $300', '$300 - $400', '$400 - $500', 'Más de $500']

  return (
    <aside className='filter-side-bar'>
      <FilterDropdown title='Tallas' options={tallas} />
      <FilterDropdown title='Marcas' options={marcas}/>
      <FilterDropdown title='Artistas' options={artistas} />
      <FilterDropdown title='Ofertas' options={ofertas}/>
      <FilterDropdown title='Precio' options={precios}/>
    </aside>
  )
}

export { SideBar }