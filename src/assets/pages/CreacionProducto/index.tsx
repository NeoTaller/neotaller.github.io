import { useState } from "react"

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
        'Content-Type': 'application/json',
        'Authentication': 'Bearer ' + token
      },
      body: JSON.stringify({
        "nombre": form.nombre,
        "descripcion": form.descripcion,
        "precio": form.precio,
        "categoria": form.categoria,
        "marca": form.marca,
        "proveedor": form.proveedor,
        "img1": form.img1.split(',')[1],
        // "img2": form.img2.split(',')[1],
        // "img3": form.img3.split(',')[1]
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
    <main>
      <h1>Creacion de Producto</h1>
      <form>
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' name='nombre' id='nombre' placeholder='Nombre del producto' onChange={handleChange}/>
        <label htmlFor='descripcion'>Descripcion</label>
        <input type='text' name='descripcion' id='descripcion' placeholder='Descripcion del producto' onChange={handleChange}/>
        <label htmlFor='precio'>Precio</label>
        <input type='text' name='precio' id='precio' placeholder='Precio del producto' onChange={handleChange} />
        <label htmlFor='categoria'>Categoria</label>
        <input type='text' name='categoria' id='categoria' placeholder='Categoria del producto' onChange={handleChange}/>
        <label htmlFor='marca'>Marca</label>
        <input type='text' name='marca' id='marca' placeholder='Marca del producto' onChange={handleChange}/>
        <label htmlFor='proveedor'>Proveedor</label>
        <input type='text' name='proveedor' id='proveedor' placeholder='proveedor del producto' onChange={handleChange}/>
        <label htmlFor='img1'>Imagen 1</label>
        {form.img1 ? <img src={form.img1} alt='Imagen 1' /> :       <input type='file' accept="image/*" name='img1' id='img1' onChange={e => convert2base64(e)}/>}
        <label htmlFor='img2'>Imagen 2</label>
        {form.img2 ? <img src={form.img2} alt='Imagen 2' /> :
        <input type='file' accept="image/*" name='img2' id='img2' onChange={e => convert2base64(e)}/>}
        <label htmlFor='img3'>Imagen 3</label>
        {form.img3 ? <img src={form.img3} alt='Imagen 3' /> :
        <input type='file' accept="image/*" name='img3' id='img3' onChange={e => convert2base64(e)}/>}

        <button type='submit' onClick={handleSubmit}>Crear</button>
      </form>
    </main>
  )
}

export { CreacionProducto }