import { useEffect, useState } from 'react';

const useFech = (ciudad) => {
    const [LatLon, setLatLon] = useState({})
    const [data, setData] = useState()
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState()

    const fechCiudad = ()=>{
        setIsloading(true)
        const key = 'f8ce090f77e3e3185c495c36c8cce901'
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=5&appid=${key}`
        console.log(url);
        fetch(url)
        .then((res)=> res.json())
        .then((res)=> {
            const lat = res[0].lat
            const lon = res[0].lon
            setLatLon({lat,lon})

            funcionPrincipal(lat, lon)
            setError('')
        })
        .catch(()=> setError('ciudad no encontrada'))
    }

    useEffect(() => {
        if (ciudad != '') {
            fechCiudad()
        }
    }, [ciudad])

    class Info{
        constructor(temp, values){
          this.temp = temp,
          this.values = values
        }
      }
  
  const funcionPrincipal = (lat, lon)=>{
  
    const key = 'f8ce090f77e3e3185c495c36c8cce901'
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
  
    fetch(url)
    .then((res)=> res.json())
    .then((res)=> {
     const temp =`Temp actual: ${Number(res.main.temp - 273.15).toFixed(1)} °C` 
      funcion2(temp, lat, lon)
      setError('')
    })   
}

   const funcion2 = (temp, lat, lon) =>{
    const key2 = 'HTmLg60vRIjKCc3zeUSIIH5KTkMyk0vc'
    
    const url2 = `https://api.tomorrow.io/v4/timelines?location=${lat},${lon}&fields=temperature,temperatureMin,temperatureMax,precipitationIntensityMax,weatherCode&weatherCode&timesteps=1d&units=metric&apikey=${key2}`
    
        fetch(url2)
        .then((res)=> res.json())
        .then((res)=> res.data.timelines)
        .then((res)=> {
            const respuesta = res[0].intervals
  
            const nuevaInfo = new Info(temp, respuesta)
            setData(nuevaInfo)
            setError('')
        })
    }
 
  
return{
    LatLon,
    data,
    setIsloading,
    isLoading,
    error
}
}

export default useFech