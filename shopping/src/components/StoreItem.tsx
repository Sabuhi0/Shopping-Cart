import { formatCurrency } from '../utilities/formatCurrency'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  image: string
}

const StoreItem = ({id, name, price, image}: StoreItemProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuanity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity(id);
  return (
    <section>
      <img className='w-full' src={image} alt="" />
      <div className='p-5 bg-white rounded-br-xl rounded-bl-xl'>
        <div className='flex items-center justify-between'>
          <span className='text-2xl'>{name}</span>
          <span className='text-xl text-gray-600'>{formatCurrency(price)}</span>
        </div>
        <div className='mt-4'>
          {quantity === 0 ? (
            <button className='w-full p-2 text-center text-white rounded-sm bg-slate-500' onClick={() => increaseCartQuantity(id)}>Add To Cart</button>
          ): <div className='flex flex-col items-center gap-2'>
              <div className='flex gap-4'>
                <button onClick={() => decreaseCartQuanity(id)}><AiOutlineMinus size={22}/></button>
                <h1>
                  <span className='text-2xl'>{quantity}</span> in cart
                </h1>
                <button onClick={() => increaseCartQuantity(id)}><AiOutlinePlus  size={22}/></button>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <button onClick={() => removeFromCart(id)} className='bg-red-600 py-2 px-3 text-white rounded-sm hover:bg-red-700 transition-colors'>Remove</button>
              </div>
            </div>}
        </div>
      </div>
    </section>
  )
}

export default StoreItem;
