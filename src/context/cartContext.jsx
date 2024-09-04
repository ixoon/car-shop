import React, {useState, createContext} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setcartItems] = useState([]);

    const addToCart = (product) => {
        setcartItems([...cartItems, product])
    }

    const itemCount = cartItems.length;

    return(
        <CartContext.Provider value={{cartItems, addToCart, itemCount}}>
            {children}
        </CartContext.Provider>
    )
}