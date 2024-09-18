import { useContext, useMemo } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem";

const Cart = () => {

    const { cart } = useContext(CartContext);
    const totalPrice = useMemo(() => {

        return cart.reduce((total, item) => 
            total + item.price * item.quantity, 0);
    },[cart]);
    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length > 0 ? (
                <>
                    {cart.map(item =>(
                        <CartItem key={item.id} item={item} /> 
                    ))}
                    <div cart-total>
                        Total Price: ${totalPrice.toFixed(2)}
                    </div>
                </>
            ) : (
                <p>Your Cart is Empty</p>

            )}
            
        </div>
    )
}

export default Cart
