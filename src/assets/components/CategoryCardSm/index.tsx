import './index.css';

interface CategoryInfo {
  rutaImg: string;
  name: string;
}

export function CategoryCardSm(categoria: CategoryInfo) {
  return (
    <div className="card-categoriaSm">
      <figure>
        <img src={categoria.rutaImg} alt="" />
      </figure>
      <span className='headline4 h-medium'>{categoria.name}</span>
    </div>
  )
}