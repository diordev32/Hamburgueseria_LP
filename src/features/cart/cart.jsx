import "./cart.css";
import React, { use, useContext, useEffect } from "react";
import CartContext from "./cartContext.jsx";

function Cart()
{
    const { cartItems } = useContext(CartContext);

    return (
        <div id="Carrito" className="Cart ">
            <h2 className="title">Carrito</h2>

            <h3 className="subtitle">Tu resumen de compra</h3>

            <div className="cart-items">
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

            <h3 className="total">

                ${cartItems.reduce((acc, item) => acc + item.price, 0)}

            </h3>

            <div className="cart-buttons">

                <button className="btn">Confirmar</button>
                <button className="btn">Cancelar</button>

            </div>

        </div>
    );
}

export default Cart;