
import useFech from '../../../hooks/useFech';
import ContenidoCard from './ContenidoCard'

const Menu = ({ciudad}) => {
  
  const {error} = useFech(ciudad)
  
  const city = ciudad[0].toUpperCase() + ciudad.substring(1);

  return (
    <div className='menu'>
      <section>
        <div className='ciudad'>
          {
            error == '' ? (<h1>{city}</h1>):
            (<h2 className='invisible'>{city}</h2>)
          }
        </div>
        <div className='div-contenido'>
          <ContenidoCard ciudad={ciudad}/>
        </div>
      </section>
  </div>
  )
}

export default Menu