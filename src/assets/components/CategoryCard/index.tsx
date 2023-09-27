import './index.css';

interface CategoryInfo {
  rutaImg: string;
  name: string;
}

export function CategoryCard(categoria: CategoryInfo) {
  return (
    <div className="card-categoria">
      <img src={categoria.rutaImg} alt="" />
      <span>{categoria.name}</span>
    </div>
  )
}