import catAll from '../../img/todaLaTienda.png'
import catAccesorios from '../../img/Categoría_accesorios.jpg'
import catFaldas from '../../img/Categoría_faldas.jpg'
import catJeans from '../../img/Categoría_jeans.jpg'
import catJoggers from '../../img/Categoría_jogger.jpg'
import catPoleras from '../../img/Categoría_poleras.jpg' 
import catVestidos from '../../img/Categoría_Vestidos.jpg'
import catZapatos from '../../img/Categoría_zapatos.jpg'
import catChaquetas from '../../img/Categorías_chaqueta.jpg'
import catPolerones from '../../img/Polerón_categoría.jpg'
import { CategoryAvatar } from '../CategoryAvatar'
import './index.css'

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryPicker = (props: Props) => {

  return (
    <div className="category-picker">
      <div className="categories">
        <div onClick={() => props.setFilter('')}>
          <CategoryAvatar rutaImg={catAll} name='Todo'/>
        </div>
        <div onClick={() => props.setFilter('Poleras')}>
          <CategoryAvatar rutaImg={catPoleras} name='Poleras' />
        </div>
        <div onClick={() => props.setFilter('Vestidos')}>
          <CategoryAvatar rutaImg={catVestidos} name='Vestidos' />
        </div>
        <div onClick={() => props.setFilter('Jeans')}>
          <CategoryAvatar rutaImg={catJeans} name='Jeans' />
        </div>
        <div onClick={() => props.setFilter('Faldas')}>
          <CategoryAvatar rutaImg={catFaldas} name='Faldas' />
        </div>
        <div onClick={() => props.setFilter('Joggers')}>
          <CategoryAvatar rutaImg={catJoggers} name='Joggers' />
        </div>
        <div onClick={() => props.setFilter('Zapatos')}>
          <CategoryAvatar rutaImg={catZapatos} name='Zapatos' />
        </div>
        <div onClick={() => props.setFilter('Polerones')}>
          <CategoryAvatar rutaImg={catPolerones} name='Polerones' />
        </div>
        <div onClick={() => props.setFilter('Chaquetas')}>
          <CategoryAvatar rutaImg={catChaquetas} name='Chaquetas' />
        </div>
        <div onClick={() => props.setFilter('Accesorios')}>
          <CategoryAvatar rutaImg={catAccesorios} name='Accesorios' />
        </div>
      </div>
    </div>
  )
}

export { CategoryPicker }