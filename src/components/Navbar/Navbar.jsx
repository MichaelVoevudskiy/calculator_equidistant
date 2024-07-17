import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
    return <div className='Navbar'>
        <NavLink to='/Eq' className='menu'>Калькулятор еквідистанти</NavLink>
        <NavLink to='/Bands' className='menu'>Калькулятор Bending</NavLink>
      </div>
}

export default Navbar