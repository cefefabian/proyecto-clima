

const CardClima = ({DataLista, isLoading}) => {
  console.log(DataLista);


  return (
    <>
    
      {
        isLoading ? (<div className='spinner'></div>):(

          DataLista.map((tiempo)=>(
            <div key={tiempo.fecha}>
              <img className='imgClima' src={tiempo.icono} alt="" />
              <h2>Dia: {tiempo.fecha}</h2>
              <h3>{tiempo.tempe} </h3>
              <h4>Max: {tiempo.tempMax.toFixed(0)} °C</h4>
              <h4>Min: {tiempo.tempMin.toFixed(0)} °C</h4>
            </div>
          ))
        )
      }
    </>
  )
}

export default CardClima