import React, { useContext, useEffect, useState } from 'react'
import useFech from '../../../hooks/useFech';
import CardClima from './CardClima';

const ContenidoCard = ({ciudad}) => {
  
  class Clima{
    constructor(tempe, tempMax, tempMin, fecha, icono) {
        this.tempe = tempe,
        this.tempMax = tempMax,
        this.tempMin = tempMin,
        this.fecha = fecha,
        this.icono = icono
    }
  }
  let arr = []
  const [DataLista, setDataLista] = useState([])

    const {LatLon, data, isLoading, setIsloading, error} = useFech(ciudad)
    console.log(error);
    if (error) {
    }

useEffect(() => {
  setTimeout(() => {
    
    clima(data);
  }, 2000);
}, [data])


const clima = (tiempo)=>{
  const {temp, values} = tiempo

    values.forEach(dias => {
        if (arr.length === 7) {
            setIsloading(false)
        }
        const fachas = dias.startTime.slice(0, 10)
        const fecha = new Date(fachas)
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const fechaLista = fecha.toLocaleDateString("es-ES", options).slice(0, 9)
            .replace(',', '').replace(' ', '').replace('1', '').replace('2', '').replace('8', '')

        const { temperatureMax, temperatureMin, weatherCode} = dias.values
        const tempe = ''
        const iconos = `../../public/iconos/${weatherCode}0.png`
        const nuevoClima = new Clima(tempe, temperatureMax, temperatureMin, fechaLista, iconos)
        
        arr.push(nuevoClima)
        const arrayListo = arr.slice(2, 7)
        
        if (arr.length === 2) {
            const { temperatureMax, temperatureMin, weatherCode} = dias.values
            
            const iconos = `../../public/iconos/${weatherCode}0.png`
            const nuevoClima = new Clima(temp, temperatureMax, temperatureMin, fechaLista, iconos)
            console.log(nuevoClima);
            arr.push(nuevoClima)
        }
        setDataLista(arrayListo)

})
}

  return (
    <>
    {
      error != '' ? (<h2 className='error'>{error}</h2>):(    <div className='contenido-card'>
      <CardClima DataLista={DataLista} isLoading={isLoading}/>
    </div>
    )
    }

    </>
  )
}

export default ContenidoCard