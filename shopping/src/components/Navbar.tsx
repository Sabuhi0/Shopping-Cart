import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <nav className='p-4'>
          <ul className='flex gap-2 text-2xl'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/store'>Store</NavLink>
            <NavLink to='/about'>About</NavLink>
          </ul>
        </nav>
        <button className='rounded-full w-12 h-12 relative'>
          <h1 className='w-6 h-6 rounded-full bg-red-600 text-white flex justify-center items-center absolute bottom-0 right-1 text-[15px]'>
            3
          </h1>
          <AiOutlineShoppingCart size={30} />
        </button>
      </div>
    </div>
  )
}

export default Navbar;
