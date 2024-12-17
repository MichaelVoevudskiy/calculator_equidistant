import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {

  const st = navData => navData.isActive ? 'active' : 'menu'
  return <div className='Navbar'>
    <NavLink className='menu' to='/'>Main Page</NavLink>
    <NavLink to='/eq' className={st}>Еквідистанта</NavLink>
    <NavLink to='/chamfers' className={st}>Фаски</NavLink>
    <NavLink to='/weight' className={st}>Вага</NavLink>
  </div>
}

export default Navbar