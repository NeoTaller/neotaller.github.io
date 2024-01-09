
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

const CategoryPicker = () => {
  return (
    <div className="category-picker">
      <div className="categories">
        {/* Esto debería alimentarse con la info del back */}
        <CategoryAvatar rutaImg='' name='Todo' />
        <CategoryAvatar rutaImg={catPoleras} name='Poleras' />
        <CategoryAvatar rutaImg={catVestidos} name='Vestidos' />
        <CategoryAvatar rutaImg={catJeans} name='Jeans' />
        <CategoryAvatar rutaImg={catFaldas} name='Faldas' />
        <CategoryAvatar rutaImg={catJoggers} name='Joggers' />
        <CategoryAvatar rutaImg={catZapatos} name='Zapatos' />
        <CategoryAvatar rutaImg={catPolerones} name='Polerones' />
        <CategoryAvatar rutaImg={catChaquetas} name='Chaquetas' />
        <CategoryAvatar rutaImg={catAccesorios} name='Accesorios' />
      </div>
    </div>
  )
}

export { CategoryPicker }