import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const { closeCart } = useShoppingCart()
    return (
        // <Offcanvas show={true} onHide={closeCart} placement="end">
        //     <Offcanvas.Header closeButton>
        //         <Offcanvas.Title>
        //             Cart
        //         </Offcanvas.Title>
        //     </Offcanvas.Header>
        // </Offcanvas>
        isOpen ? <div className="bg-white p-6 w-[90%] h-full absolute top-0 right-0 transition duration-700 ease-in-out">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">Cart</h1>
                <button className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer" onClick={closeCart}>X</button>
            </div>
        </div>: null
    )
}

export default ShoppingCart;