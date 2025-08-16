import React, {useContext} from "react";
import CartContext from "./cartContext.jsx";


function Cart()
{
    const { cartItems, addItem, removeItem } = useContext(CartContext);


    function clickHandler(action, item)
    {
        if (action === 'add') {
            return addItem(item);
        }
        else if (action === 'remove') {
            return removeItem(item);
        }
    }

    return (
        <div id="Carrito">
            <h2>Carrito</h2>

            <h3>Tu resumen de compra</h3>

            <div>
                <ul>
                    {
                        cartItems.map((item, index) => (
                            <div key={index}>
                            <li>
                                <h4>{item.id}</h4>
                                <h4>{item.name}</h4>
                                <h4>Cantidad: {item.quantity}</h4>
                                <h5>${item.price}</h5>
                            </li>

                            <button onClick={() => clickHandler("add", item)}>Agregar</button>
                            <button onClick={() =>clickHandler("remove", item)}>Remover</button>
                            </div>
                        ))
                    }
                </ul>
            </div>

            <h3>

            <p>
                Su total es de: ${cartItems.reduce((acc, item) => acc + (item.price * item.quantity),0)}
            </p>
            </h3>

            <div>

                <button>Confirmar</button>
                <button>Cancelar</button>

            </div>

        </div>
    );
}

export default Cart;