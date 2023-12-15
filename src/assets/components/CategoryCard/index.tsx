import './index.css';

interface CategoryInfo {
  rutaImg: string;
  name: string;
}

export function CategoryCard(categoria: CategoryInfo) {
  return (
    <div className="card-categoria">
      <figure>
        <img src={categoria.rutaImg} alt="" />
      </figure>
      <span className='headline3 h-medium'>{categoria.name}</span>
    </div>
  )
}