import './index.css'

const PageTitle = ({ titulo, breadcrum} : {titulo:string, breadcrum:string}) => {
  return (
    <div className='page-title'>
      <section>
        <h2 className='headline1 h-semibold '>{titulo}</h2>
      </section>
      <p className='text3 t-regular'>{breadcrum}</p>
    </div>
  )
}

export { PageTitle }