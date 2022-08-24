import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <div className='shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='py-4 relative'>
          <h1 className='flex gap-2 text-2xl'>
            Shopping Cart
          </h1>
          <img className='absolute top-0 left-6 right-0 -z-10 opacity-20' src="https://www.nicepng.com/png/detail/231-2317666_cart-icon-moving-shopping-cart-icon.png" alt="" />
        </div>
        {cartQuantity > 0 && (
          <button className='rounded-full w-12 h-12 relative' onClick={openCart}>
            <h1 className='w-6 h-6 rounded-full bg-red-600 text-white flex justify-center items-center absolute bottom-0 right-1 text-[15px]'>
              {cartQuantity}
            </h1>
            <AiOutlineShoppingCart size={30} />
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar;
