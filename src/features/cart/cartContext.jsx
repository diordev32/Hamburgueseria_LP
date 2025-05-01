import { createContext, useState, useEffect } from "react";


const CartContext = createContext();

export function CartProvider({ children })
{
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
    };

    const removeItem = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem !== item));
    };

    useEffect(() => {
        console.log('Carrito actualizado', cartItems);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;