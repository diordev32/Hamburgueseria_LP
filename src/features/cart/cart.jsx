import React, {useContext} from "react";
import CartContext from "./cartContext.jsx";

function Cart()
{
    const { cartItems } = useContext(CartContext);

    return (
        <div id="Carrito">
            <h2>Carrito</h2>

            <h3>Tu resumen de compra</h3>

            <div>
                <ul>
                    {
                        cartItems.map((item, index) => (
                            <li key={index}>
                                <h4>{item.name}</h4>
                                <h5>${item.price}</h5>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <h3>

                ${cartItems.reduce((acc, item) => acc + item.price, 0)}

            </h3>

            <div>

                <button>Confirmar</button>
                <button>Cancelar</button>

            </div>

        </div>
    );
}

export default Cart;