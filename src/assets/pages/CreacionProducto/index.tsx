import { useState } from "react"
import { PageTitle } from "../../components/PageTitle"
import './index.css'

const CreacionProducto = () => {

  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '',
    marca: '',
    proveedor: '',
    img1: '',
    img2: '',
    img3: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = localStorage.getItem('token')

    fetch("http://161.97.138.249:3000/productos",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authentication": `${token}`,
      },
      body: JSON.stringify({
        "nombre": form.nombre,
        "descripcion": form.descripcion,
        "precio": form.precio,
        "categoria": form.categoria,
        "marca": form.marca,
        "proveedor": form.proveedor,
        "img1base64": form.img1.split(',')[1],
        "img2base64": form.img2.split(',')[1],
        "img3base64": form.img3.split(',')[1]
      })
    }).then(res => {
      if (res.ok) {
        return console.log("Producto creado", res.status)
      }
      throw new Error("Error en la creacion del producto")
    }).catch(err => {
      console.log(err)
    })

  }

  const convert2base64 = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      setForm({
        ...form,
        [e.target.name]: reader.result
      })
    }
    reader.readAsDataURL(file)
  }


  return (
    <>
    <PageTitle titulo='Nuevo producto' breadcrum="Admin > Creación de producto" />
    <main className='creacion-producto-main'>
      <form>
        <div className="creacion-info">
          <h2>Información principal</h2>
          <div className="creacion-info-item">
            <label htmlFor='nombre'>Nombre del producto</label>
            <input type='text' name='nombre' id='nombre' placeholder='Ingresa el nombre del producto' onChange={handleChange}/>
          </div>
          <div className="creacion-info-doblecolumna">
            <div className="creacion-info-item">
              <label htmlFor='precio'>Precio del producto</label>
              <input type='text' name='precio' id='precio' placeholder='Precio del producto' onChange={handleChange} />
            </div>
            <div className="creacion-info-item">
              <div>
                <input type='checkbox' name='esOferta' id='esOferta' onChange={handleChange} value={'oferta'} />
                <label htmlFor='esOferta'>Precio oferta</label>
              </div>
              <input type="text" name="precioOferta" id="precioOferta" placeholder="Ingresa oferta" onChange={handleChange} />
            </div>
          </div>
          <div className="creacion-info-item">
            <label htmlFor='talla'>Selecciona la talla del producto</label>
            <div className="creacion-info-multiple">
              <section>
                <input type="radio" name="talla" id={'talla-xs'} value={'XS'} onSelect={handleChange} />
                <label htmlFor="talla-xs">XS</label>
              </section>
              <section>
                <input type="radio" name="talla" id={'talla-s'} value={'S'} onSelect={handleChange} />
                <label htmlFor="talla-xs">S</label>

              </section>
              <section>
                <input type="radio" name="talla" id={'talla-m'} value={'M'} onSelect={handleChange} />
                <label htmlFor="talla-xs">M</label>

              </section>
              <section>
                <input type="radio" name="talla" id={'talla-l'} value={'L'} onSelect={handleChange} />
                <label htmlFor="talla-xs">L</label>

              </section>
              <section>
                <input type="radio" name="talla" id={'talla-xl'} value={'XL'} onSelect={handleChange} />
                <label htmlFor="talla-xs">XL</label>

              </section>
              <section>
                <input type="radio" name="talla" id={'talla-xxl'} value={'XXL'} onSelect={handleChange} />
                <label htmlFor="talla-xs">XXL</label>

              </section>
              
            </div>
          </div>
          
          <h2>Especificaciones del producto</h2>
          <div className="creacion-info-multiple">
            <div className="creacion-info-item">
              <label htmlFor='cadera'>Cadera</label>
              <input type='text' name='cadera' id='cadera' placeholder='cm' onChange={handleChange}/>
            </div>
            <div className="creacion-info-item">
              <label htmlFor='pecho'>Pecho</label>
              <input type='text' name='pecho' id='pecho' placeholder='cm' onChange={handleChange}/>
            </div>
            <div className="creacion-info-item">
              <label htmlFor='largo'>Largo</label>
              <input type='text' name='largo' id='largo' placeholder='cm' onChange={handleChange}/>
            </div>
          </div>

          <div className="creacion-info-item">
            <label htmlFor='descripcion'>Descripcion</label>
            <input type='text' name='descripcion' id='descripcion' placeholder='Descripcion del producto' onChange={handleChange}/>
          </div>
          
          <div className="creacion-info-item">
            <label htmlFor='condicion'>Condicion</label>
            <input type='text' name='categoria' id='categoria' placeholder='Categoria del producto' onChange={handleChange}/>
          </div>
          <div className="creacion-info-item">
            <label htmlFor='material'>Material</label>
            <input type='text' name='material' id='material' placeholder='Ingresa el material' onChange={handleChange}/>
          </div>
        </div>
        <div className="creacion-fotos">
          <h2>Fotos</h2>
          <div className="creacion-img-container">
            <label htmlFor='img1'>Imagen 1</label>
            {form.img1 ? <img className="creacion-img-preview" src={form.img1} alt='Imagen 1' /> : <input type='file' accept="image/*" name='img1' id='img1' onChange={e => convert2base64(e)}/>}
          </div>
          <div className="creacion-img-container">
            <label htmlFor='img2'>Imagen 2</label>
            {form.img2 ? <img className="creacion-img-preview" src={form.img2} alt='Imagen 2' /> : <input type='file' accept="image/*" name='img2' id='img2' onChange={e => convert2base64(e)}/>}
          </div>
          <div className="creacion-img-container">
            <label htmlFor='img3'>Imagen 3</label>
            {form.img3 ? <img className="creacion-img-preview" src={form.img3} alt='Imagen 3' /> : <input type='file' accept="image/*" name='img3' id='img3' onChange={e => convert2base64(e)}/>}
          </div>
          <h2>Artista</h2>
          <div className="creacion-info-item">
            <label htmlFor="artista">Nombre del artista</label>
            <input type='text' name='artista' id='artista' placeholder='Ingresa el nombre del artista' onChange={handleChange}/>
          </div>
          <button type='submit' onClick={handleSubmit}>Crear</button>
        </div>
      </form>
    </main>
    </>
  )
}

export { CreacionProducto }