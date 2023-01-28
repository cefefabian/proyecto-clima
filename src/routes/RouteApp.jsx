import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ClimaApp from '../ClimaApp'

const RouteApp = () => {
  return (
    <Routes>
        <Route path='/' element={<ClimaApp/>}/>

        <Route path='/*' element={<ClimaApp/>}/>
    </Routes>
  )  
}

export default RouteApp