import './index.css';

interface CategoryInfo {
  rutaImg: string;
  name: string;
}


export function CategoryAvatar(category: CategoryInfo){
  
  return(
    <div className='category-avatar'>
      <div className='category-avatar-frame'>
        <figure className='category-avatar-figure'>
          <img src={category.rutaImg} alt="Foto categoría" />
        </figure>
      </div>
      <h4 className='category-avatar-nombre h-medium'>
        {category.name}
      </h4>
    </div>
  )
}
