import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/data.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if (item == null) return null;

    return (
        <div className="flex items-center gap-8">
            <img className="w-125px h-75px md:w-[300px] object-cover" src={item.image} alt="" />
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <h1 className="text-4xl">{item.name} {" "}</h1>
                        {quantity > 1 && (
                            <span className="text-gray-400 text-sm">{quantity}x</span>
                        )}
                    </div>
                    <h1 className="text-gray-400 text-xl">
                        { formatCurrency(item.price) }
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <h1>{ formatCurrency(item.price * quantity) }</h1>
                    <button className="border rounded-sm w-8 h-8 flex items-center justify-center transition-all hover:bg-red-500 hover:border-red-500 hover:text-white" onClick={() => removeFromCart(item.id)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
