import './index.css'

const SideBar = () => {
  return (
    <aside className='filter-side-bar'>
      <h4>Tallas</h4>
      <ul className="filtro-talla">
        <li>
          <input type="checkbox" name="filtro-talla" id="ft-xs" />
          <label htmlFor="ft-s">XS</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-talla" id="ft-s" />
          <label htmlFor="ft-s">S</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-talla" id="ft-m" />
          <label htmlFor="ft-m">M</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-talla" id="ft-l" />
          <label htmlFor="ft-l">L</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-talla" id="ft-xl" />
          <label htmlFor="ft-xl">XL</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-talla" id="ft-xxl" />
          <label htmlFor="ft-xxl">XXL</label>
        </li>
      </ul>
      <h4>Marcas</h4>
      <ul className="filtro-marca">
        <li>
          <input type="checkbox" name="filtro-marca" id="ft-m1" />
          <label htmlFor="ft-m1">Marca 1</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-marca" id="ft-m2" />
          <label htmlFor="ft-m2">Marca 2</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-marca" id="ft-m3" />
          <label htmlFor="ft-m3">Marca 3</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-marca" id="ft-m4" />
          <label htmlFor="ft-m4">Marca 4</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-marca" id="ft-m5" />
          <label htmlFor="ft-m5">Marca 5</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-marca" id="ft-m6" />
          <label htmlFor="ft-m6">Marca 6</label>
        </li>
      </ul>
      <h4>Artistas</h4>
      <ul className="filtro-artista">
        <li>
          <input type="checkbox" name="filtro-artista" id="ft-art1" />
          <label htmlFor="ft-art1">Artista 1</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-artista" id="ft-art2" />
          <label htmlFor="ft-art2">Artista 2</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-artista" id="ft-art3" />
          <label htmlFor="ft-art3">Artista 3</label>
        </li>
      </ul>
      <h4>Ofertas</h4>
      <ul className="filtro-oferta">
        <li>
          <input type="checkbox" name="filtro-oferta" id="ft-of1" />
          <label htmlFor="ft-of1">Poleras en oferta</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-oferta" id="ft-of2" />
          <label htmlFor="ft-of2">Jeans en oferta</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-oferta" id="ft-of3" />
          <label htmlFor="ft-of3">Chaquetas en oferta</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-oferta" id="ft-of4" />
          <label htmlFor="ft-of4">Vestidos en oferta</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-marca" id="ft-of5" />
          <label htmlFor="ft-of5">Zapatillas en oferta</label>
        </li>
        <li>
          <input type="checkbox" name="filtro-marca" id="ft-of6" />
          <label htmlFor="ft-of6">Accesorios en oferta</label>
        </li>
      </ul>
      <div className='precio'>
        <h4>Precios</h4>
        <div className='precio-botones'>
          <span className='pulsado'>CLP</span>
          <span>USD</span>
        </div>
      </div>
      <div className='precio-rango'>
        <label htmlFor='desde'>Desde</label>
        <input type='number' id='desde' name='desde' placeholder='0 CLP'/>
        <label htmlFor='hasta'>Hasta</label>
        <input type='hasta' id='hasta' name='hasta' placeholder='1000000 CLP'/>
      </div>
      <button>Aplicar</button>
    </aside>
  )
}

export { SideBar }