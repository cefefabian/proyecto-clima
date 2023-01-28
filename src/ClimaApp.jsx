import React, { useState } from 'react'
import Input from './pages/home/busqueda/Input'
import Menu from './pages/home/cards/Menu'
import NavBar from './pages/home/busqueda/NavBar'
import '../styles/PagePrincipal.css'

const ClimaApp = () => {
    const [ciudad, setCiudad] = useState('')

    if (ciudad != '') {
      localStorage.setItem('ciudad', ciudad)
      
    }
  
    const climaResults = (Results)=>{
  
      setCiudad(Results)
    }

  return (
    <>
        <div className='navegacion'>
          <Input climaResults={climaResults}/>
          <NavBar/>
        </div>
       <Menu ciudad={ciudad === '' ? (localStorage.getItem('ciudad')) : (ciudad)}/>
    </>
  )
}

export default ClimaApp