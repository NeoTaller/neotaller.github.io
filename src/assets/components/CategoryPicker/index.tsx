
import { CategoryAvatar } from '../CategoryAvatar'
import './index.css'

const CategoryPicker = () => {
  return (
    <div className="category-picker">
      <div className="categories">
        {/* Esto debería alimentarse con la info del back */}
        <CategoryAvatar rutaImg='' name='Todo' />
        <CategoryAvatar rutaImg='' name='Poleras' />
        <CategoryAvatar rutaImg='' name='Vestidos' />
        <CategoryAvatar rutaImg='' name='Jeans' />
        <CategoryAvatar rutaImg='' name='Faldas' />
        <CategoryAvatar rutaImg='' name='Joggers' />
        <CategoryAvatar rutaImg='' name='Zapatos' />
        <CategoryAvatar rutaImg='' name='Polerones' />
        <CategoryAvatar rutaImg='' name='Chaquetas' />
        <CategoryAvatar rutaImg='' name='Accesorios' />
      </div>
    </div>
  )
}

export { CategoryPicker }