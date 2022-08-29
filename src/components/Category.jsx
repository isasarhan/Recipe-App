import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiChopsticks, GiNoodles} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'
import "./components.css"

const Category = () => {
  return (
    <div className='list'>
      <NavLink to={'/cuisine/Italian'} className='list-link'>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/American'} className='list-link'>
        <FaHamburger/>
        <h4>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'}className='list-link'>
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/Spanish'}className='list-link'>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </NavLink>
    </div>
  )
}

export default Category
