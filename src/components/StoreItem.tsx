import React from 'react'

type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  image: string
}

const StoreItem = ({id, name, price, image}: StoreItemProps) => {
  return (
    <div className=''>
      <img className='h-full object-cover' src={image} alt="" />
      <div className='bg-white flex justify-between items-center p-5'>
        <span className='text-2xl'>{name}</span>
        <span className='text-xl text-gray-600'>${price}</span>
      </div>
    </div>
  )
}

export default StoreItem;
