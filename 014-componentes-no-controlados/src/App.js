import { useState } from "react"

const App = () => {
  const [value, setValue] = useState({
    normal: 'por defecto',
    texto: 'por defecto',
    select: '',
    check: false,
    estado: 'feliz'
  })
  const handleChange = (target) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    }))
  }
  console.log(value)
  return (
    <div>
      <input type='text' name='normal' value={value.normal} onChange={handleChange} />
      {value.length < 5 ? <span>Longitud minima de 5</span> : null}

      <textarea name='texto' onChange={handleChange} value={value.texto} />

      <select value={value.select} name='select' onChange={handleChange}>
        <option value=''>-- Seleccione --</option>
        <option value='chanchofeliz'>Chancho feliz</option>
        <option value='chanchitofeliz'>Chanchito feliz</option>
        <option value='chanchitotriste'>Chanchito triste</option>
        <option value='felipe'>Felipe</option>
      </select>

      <input type='checkbox' name='check'
        onChange={handleChange} checked={value.check}
      />

      <div>
        <label>Chancho</label>
          <input onChange={handleChange} checked={value.estado === 'feliz'}
            type="radio" value="feliz" name="estado" />Feliz
          
          <input onChange={handleChange} checked={value.estado === 'triste'}
            type="radio" value="triste" name="estado" />Chancho
          
          <input onChange={handleChange} checked={value.estado === 'felipe'}
            type="radio" value="felipe" name="estado" /> Felipe
      </div>
    </div>
  )
}

export default App;
