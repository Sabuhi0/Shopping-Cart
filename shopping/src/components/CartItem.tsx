import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/data.json"

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if (item == null) return null;

    return (
        <div className="flex items-start gap-8">
            <img className="w-125px h-75px md:w-[300px] object-cover" src={item.image} alt="" />
            <div className="flex items-end gap-2">
                <h1 className="text-3xl">{item.name} {" "}</h1>
                {quantity > 1 && (
                    <span className="text-gray-400 text-sm">{quantity}x</span>
                )}
            </div>
        </div>
    )
}

export default CartItem;
