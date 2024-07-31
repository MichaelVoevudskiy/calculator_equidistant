import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  const st = navData => navData.isActive ? 'active' : 'menu'
  return <div className='Navbar'>
    <NavLink className='menu' to='/'>Main Page</NavLink>
    <NavLink to='/Eq' className={st}>Еквідистанта</NavLink>
    <NavLink to='/Сhamfers' className={st}>Фаски</NavLink>
    <NavLink to='/Weight' className={st}>Вага</NavLink>
  </div>
}

export default Navbar