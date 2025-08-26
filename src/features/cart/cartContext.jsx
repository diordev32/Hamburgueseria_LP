import { createContext, useState, useEffect } from "react";


const CartContext = createContext();

export function CartProvider({ children })
{
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) =>
    {

        setCartItems((prevItems) => {

            const itemIndex = prevItems.findIndex((cartItem) => cartItem.productid === item.productid);

            const cartItem = prevItems[itemIndex];

            if (itemIndex === -1)
            {
                const itemUpdated = {...item, quantity: 1};

                return [...prevItems, itemUpdated];
            }
            else
                {
                    const itemUpdated = {...cartItem, quantity: cartItem.quantity + 1};

                    const newCartItems = [...cartItems];
                    newCartItems[itemIndex] = itemUpdated;
                    return newCartItems;
                }
        });
    }

    const removeItem = (item) =>
    {
        setCartItems((prevItems) => {

            const updatedItems = prevItems.map((cartItem) =>
            {
                if (cartItem.productid === item.productid)
                {
                    return {...cartItem, quantity: cartItem.quantity - 1};
                }
                return cartItem
                });

            const filteredItems = updatedItems.filter((cartItem) => cartItem.quantity > 0);
            return filteredItems;
        });
    }


    useEffect(() => {
        console.log('Carrito actualizado', cartItems);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems,setCartItems ,addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;