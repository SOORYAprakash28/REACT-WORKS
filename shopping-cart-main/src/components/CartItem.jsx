import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartItem = ({item}) => {

    const { removeFromCart} = useContext(CartContext);

    return (
        <div className="cart-item">
            <h4>{item.name} (x{item.quantity})</h4>

            <div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                &nbsp;&nbsp;&nbsp;
                <button className="remove-btn" onClick={() => 
                        removeFromCart(item.id)}>
                    Remove
                </button>
            </div>
            
        </div>
    )
}

export default CartItem
