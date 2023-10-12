import { useState } from 'react'
import './index.css'

interface Mensaje{
  titulo: string,
  mensaje: string
}
const Faq = ({ titulo, mensaje }: Mensaje) => {

  const [isClicked, setIsClicked] = useState(false)

  return(
    <div className='faq'>
      <div className='faq-title'>
        <h5 className='headline2'>{titulo}</h5>
        <span className={'headline2' + (isClicked? ' abajo':' derecha')} onClick={() => (setIsClicked(!isClicked))}>{'>'}</span>
      </div>
      <p className={isClicked? '':'ocultar'}>{mensaje}</p>
    </div>
  )
}

export { Faq }
