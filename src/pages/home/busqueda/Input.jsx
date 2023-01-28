import React, { useState } from 'react'


const Input = ({climaResults}) => {

    const [busqueda, setBusqueda] = useState({
        ciudad:''
    })
    const buscarClima = ({target})=>{
      const {value} = target
      
      setBusqueda({
        ciudad: value
      })
    }
    
    const enviar = (e)=>{
      e.preventDefault()
      
      climaResults(busqueda.ciudad)
    }
    

return (
  <>
  <div className='input-div'>
    <form onSubmit={enviar} className='form__group'>
    <input type="text"
    id="name"
      className='el-input form__input'
        name='ciudad'
        onChange={buscarClima} 
        placeholder='Ciudad'/>
        <label className="form__label">Ciudad</label>
    </form>
        <button className='btn' type='submit' onClick={enviar}>
            Buscar
        </button>
  </div>
  </>
)
}

export default Input