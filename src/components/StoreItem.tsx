import React from 'react'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  image: string
}

const StoreItem = ({id, name, price, image}: StoreItemProps) => {
  const quantity = 1;
  return (
    <section>
      <img className='w-full' src={image} alt="" />
      <div className='bg-white p-5 rounded-br-xl rounded-bl-xl'>
        <div className='flex justify-between items-center'>
          <span className='text-2xl'>{name}</span>
          <span className='text-xl text-gray-600'>{formatCurrency(price)}</span>
        </div>
        <div className='mt-4'>
          {quantity === 0 ? (
            <button className='w-full p-2 text-center rounded-sm bg-slate-500 text-white'>Add To Cart</button>
          ): <div className='flex flex-col items-center gap-2'>
              <div className='flex gap-4'>
                <button>-</button>
                <h1>
                  <span className='text-2xl'>{quantity}</span> in cart
                </h1>
                <button>+</button>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <button>Remove</button>
              </div>
            </div>}
        </div>
      </div>
    </section>
  )
}

export default StoreItem;
