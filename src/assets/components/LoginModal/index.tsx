import { useState } from 'react'
import './index.css'
import { Md5 } from 'ts-md5'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { logout } from '../../../redux/features/userSlice'
import { useDispatch } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { login } from '../../../redux/features/userSlice'


interface LoginResponse{
  access_token: string
}

interface TokenClaims {
  id: number;
  username: string;
  nombres: string;
  apellidos: string;
  telefono?: string;
  direccionDespacho?: string;
  numeroDepartamentoDespacho?: string;
  comunaDespacho?: string;
  regionDespacho?: string;
  direccionFacturacion?: string;
  numeroDepartamentoFacturacion?: string;
  comunaFacturacion?: string;
  regionFacturacion?: string;
  iat?: number;
  exp?: number;
}

const LoginModal = () => {

  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const passwordEncriptado = Md5.hashStr(form.password)
    
    fetch("http://161.97.138.249:3000/login",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": form.username,
        "password": passwordEncriptado
      })
    }).then(res => {
      if (res.ok) {
        return res.json() as Promise<LoginResponse>
      }
      throw new Error('Error en la llamada a la API')
    }).then(json => {
      localStorage.setItem('token', json.access_token)
      const tokenDecoded = jwtDecode<TokenClaims>(json.access_token)
      dispatch(login({
        id: tokenDecoded.id,
        username: tokenDecoded.username,
        nombres: tokenDecoded.nombres,
        apellidos: tokenDecoded.apellidos,
        telefono: tokenDecoded.telefono,
        direccionDespacho: tokenDecoded.direccionDespacho,
        numeroDepartamentoDespacho: tokenDecoded.numeroDepartamentoDespacho,
        comunaDespacho: tokenDecoded.comunaDespacho,
        regionDespacho: tokenDecoded.regionDespacho,
        direccionFacturacion: tokenDecoded.direccionFacturacion,
        numeroDepartamentoFacturacion: tokenDecoded.numeroDepartamentoFacturacion,
        comunaFacturacion: tokenDecoded.comunaFacturacion,
        regionFacturacion: tokenDecoded.regionFacturacion,
        isAuth: true
      }))
    }).catch(err => {
      console.log(err)})
  }

  return (
      <div>
        {!user.isAuth &&
        <form>
          <h1>Login</h1>
          <label htmlFor='username'>Nombre de Usuario</label>
          <input type='text' placeholder='Username' name='username' onChange={handleChange}/>
          <label htmlFor='password'>Contraseña</label>
          <input type='password' placeholder='Password' name='password' onChange={handleChange}/>
          <button type='submit' onClick={handleSubmit}>Login</button>
        </form>
        }
        {user.isAuth && <button onClick={() => dispatch(logout())}>Logout</button>}
      </div>
  )
}

export { LoginModal }