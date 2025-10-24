import { useContext } from "react";
import CartContext from "../cart/cartContext.jsx";
import { Link } from "react-router";



function Summary({formData})
{
    const { cartItems } = useContext(CartContext);

    const order = { ...formData, cartItems };

    return(
        <div className="text-center">
            <h2 className="font-Text font-bold text-2xl p-4 text-center">
                Resumen de tu compra
            </h2>
        <div className="p-4">
            <p>
                <strong>Nombre:</strong> {order.name}
            </p>
            <p>
                <strong>Teléfono:</strong> {order.tel}
            </p>
            <p>
            <strong>Método de envío:</strong> {order.shipping}
            </p>
            {order.shipping === "delivery" && (
                <p>
                    <strong>Dirección:</strong> {order.address}
                </p>
            )}
        </div>

        <div className="p-4">
            <h3 className="font-bold">Productos:</h3>
            {order.cartItems && (
            <ul>
                {order.cartItems.map((item, index) => (
                <li key={index}>
                {index+1} - {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
                </li>
                ))}
            </ul>
            )}
        </div>
        <div className="p-4 font-bold text-mustard text-3xl">
            <h2 className=""> Total:
            </h2>$
                {order.cartItems &&
                order.cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0)
                }
        </div>

        <div className="flex justify-center items-center gap-10">
        <button
        className="bg-red-700 text-mustard font-bold py-2 px-4 rounded-lg mb-4 hover:bg-red-400  hover:text-black transition-colors duration-300"
        onClick={() => alert("¡Compra realizada con éxito!")}>
            Confirmar
        </button>

        <Link to="/">
            <button
            className="bg-gray-800 text-mustard font-bold py-2 px-4 rounded-lg mb-4 hover:bg-gray-500  hover:text-black transition-colors duration-300">
                Cancelar
            </button>
        </Link>
        </div>

    </div>
    )
}

export default Summary;