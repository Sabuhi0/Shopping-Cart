import { useShoppingCart } from "../context/ShoppingCartContext";
import { FaRegWindowClose } from 'react-icons/fa'
import CartItem from "./CartItem";

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        isOpen ? <div className="bg-white p-6 w-[90%] h-full absolute top-0 right-0 transition duration-700 ease-in-out">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">Cart</h1>
                <button className="cursor-pointer hover:scale-110" onClick={closeCart}><FaRegWindowClose size={25}/></button>
            </div>
            <div className="flex flex-col gap-8 pt-6">
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item}/>
                ))}
            </div>
        </div>: null
    )
}

export default ShoppingCart;