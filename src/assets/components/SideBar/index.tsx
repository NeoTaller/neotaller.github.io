import { FilterDropdown } from '../FilterDropdown'
import './index.css'

const SideBar = ({ setSelectedTallas, setSelectedMarcas, setSelectedArtistas, setSelectedOfertas, setSelectedPrecios } : { setSelectedTallas: React.Dispatch<React.SetStateAction<string[]>>, setSelectedMarcas:React.Dispatch<React.SetStateAction<string[]>>, setSelectedArtistas:React.Dispatch<React.SetStateAction<string[]>>, setSelectedOfertas:React.Dispatch<React.SetStateAction<string[]>>, setSelectedPrecios:React.Dispatch<React.SetStateAction<string[]>> }) => {

  const tallas = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const marcas = ['Marca 1', 'Marca 2', 'Marca 3', 'Marca 4']
  const artistas = ['Artista 1', 'Artista 2', 'Artista 3', 'Artista 4']
  const ofertas = ['Si', 'No']
  const precios = ['Menos de $100', '$100 - $200', '$200 - $300', '$300 - $400', '$400 - $500', 'Más de $500']

  return (
    <aside className='filter-side-bar'>
      <FilterDropdown setSelectedArray={setSelectedTallas} title='Tallas' options={tallas} />
      <FilterDropdown setSelectedArray={setSelectedMarcas} title='Marcas' options={marcas}/>
      <FilterDropdown setSelectedArray={setSelectedArtistas} title='Artistas' options={artistas} />
      <FilterDropdown setSelectedArray={setSelectedOfertas} title='Ofertas' options={ofertas}/>
      <FilterDropdown setSelectedArray={setSelectedPrecios} title='Precio' options={precios}/>
    </aside>
  )
}

export { SideBar }