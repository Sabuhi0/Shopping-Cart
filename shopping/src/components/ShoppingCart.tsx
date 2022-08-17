import { useShoppingCart } from "../context/ShoppingCartContext";
import { FaRegWindowClose } from 'react-icons/fa';
import CartItem from "./CartItem";
import storeItems from "../data/data.json"
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        isOpen ? <div className="bg-white p-6 w-[90%] absolute top-0 right-0 transition-all !h-full">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">Cart</h1>
                <button className="cursor-pointer hover:scale-110" onClick={closeCart}><FaRegWindowClose size={25}/></button>
            </div>
            <div className="flex flex-col gap-8 pt-6">
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item}/>
                ))}
                <div className="flex justify-end">
                    <h1 className="text-3xl font-bold pb-3">
                        Total: {" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItems) => {
                                const item = storeItems.find(i => i.id === cartItems.id)
                                return total + (item?.price || 0) * cartItems.quantity
                            }, 0)
                        )}
                    </h1>
                </div>
            </div>
        </div>: null
    )
}

export default ShoppingCart;