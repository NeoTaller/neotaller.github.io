import { useEffect, useState } from 'react'
import './index.css'

interface FilterDropdownProps {
  title: string
  options: string[]
  setSelectedArray: React.Dispatch<React.SetStateAction<string[]>>
}

const FilterDropdown = (props : FilterDropdownProps) => {

  const [display, setDisplay] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {props.setSelectedArray(selected)}, [selected])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      setSelected(selected.filter((item) => item !== e.target.value))
    }
    if (e.target.checked) {
      setSelected([...selected, e.target.value])
    }
  }

  return (
    <section className='filter-dropdown'>
        <div className={'filter-title ' + (display? 'title-active':'')}>
          <p className='text1 t-bold'>{props.title}</p>
          <span onClick={() => setDisplay(!display)}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={display ? 'up-white':'down-black'}>
              <path fillRule="evenodd" clipRule="evenodd" d="M16 14.4999C15.744 14.4999 15.488 14.4019 15.293 14.2069L11.988 10.9019L8.69502 14.0819C8.29702 14.4659 7.66502 14.4559 7.28102 14.0569C6.89702 13.6599 6.90802 13.0259 7.30502 12.6429L11.305 8.78091C11.698 8.40191 12.322 8.40691 12.707 8.79291L16.707 12.7929C17.098 13.1839 17.098 13.8159 16.707 14.2069C16.512 14.4019 16.256 14.4999 16 14.4999Z"/>
            </svg>
          </span>
        </div>
        <div className={'filter-options ' + (display? 'desplegado': 'oculto')}>
          <ul>
            {
              props.options.map((option) => {
                return (
                  <li key={option}><input onChange={handleChange} type="checkbox" value={option} />{option}</li>
                )
              })
            }
          </ul>
        </div>
      </section>
  )
}

export { FilterDropdown } 