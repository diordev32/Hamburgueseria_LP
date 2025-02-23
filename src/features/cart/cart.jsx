import "./cart.css";

function Cart() 
{
    return (
        <div className="Cart">
            <h2 className="title">Carrito</h2>

            <h3 className="subtitle">Tu resumen de compra</h3>

            <div className="cart-items">
                <ul>
                    <li>Producto 1</li>
                    <li>Producto 2</li>
                    <li>Producto 3</li>
                    <li>Producto 4</li>
                    <li>Producto 5</li>
                </ul>
            </div>

            <h3 className="total">Total: $ 1000</h3>

            <div className="cart-buttons">

                <button className="btn">Confirmar</button>
                <button className="btn">Cancelar</button>

            </div>

        </div>
    );    
}


export default Cart;