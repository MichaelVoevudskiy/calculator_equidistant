import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{

  const st = navData => navData.isActive ? 'active' : 'menu'
    return <div className='Navbar'>
      <NavLink className='menu' to='/'>Main Page</NavLink>
        <NavLink to='/Eq' className={st}>Калькулятор еквідистанти</NavLink>
        <NavLink to='/Сhamfers' className={st}>Калькулятор Фасок</NavLink>
      </div>
}

export default Navbar