import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/store'>Store</NavLink>
          <NavLink to='/about'>About</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
