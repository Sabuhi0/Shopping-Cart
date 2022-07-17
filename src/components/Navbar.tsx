import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='shadow-md'>
      <div className='container mx-auto'>
      <nav className='p-4'>
        <ul className='flex gap-2 text-2xl'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/store'>Store</NavLink>
          <NavLink to='/about'>About</NavLink>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar;
