import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-div'>

            <a href='https://github.com/cefefabian'>
                <img width='30px' src="../../../public/github-logo-24.png" alt="" srcset="" />
            </a>
        </div>
        <div className='navbar-div2'>
            <a href='https://www.tomorrow.io/weather-api/'>
                <img src="https://www.tomorrow.io/wp-content/uploads/2021/04/tomorrow-logo-colored.svg" alt="" srcset="" />
            </a>
        </div>
    </div>
  )
}

export default NavBar