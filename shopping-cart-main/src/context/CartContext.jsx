import { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";


const CartContext = createContext();

const CartProvider= ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    //lets add functions to add and remove cart item
    const addToCart = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    };

    return (
        <CartContext.Provider 
            value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider};