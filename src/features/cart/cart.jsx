import {useContext, useState} from "react";
import CartContext from "./cartContext.jsx";
import { ModalIsOpenContext } from "../../App.jsx";
import iconAdd from "../../assets/images/iconAdd.svg";
import iconRemove from "../../assets/images/iconRemove.svg";
import iconClose from "../../assets/images/close.svg";


function Cart()
{

    const [view, setView] = useState('cart');

    const { cartItems,setCartItems, addItem, removeItem } = useContext(CartContext);

    const { isModalOpen, setIsModalOpen } = useContext(ModalIsOpenContext);

    function clickHandler(action, item)
    {
        if (action === 'add') {
            return addItem(item);
        }
        else if (action === 'remove') {
        }
            return removeItem(item);
        }

    if (!isModalOpen)
    {
        return null;
    }

    let modalContent;

    if (view === 'cart')
    {
        modalContent = (


            <div id="Carrito">
                <h2

                className="font-Text font-bold text-2xl p-4 text-center">
                    Tus productos {}
                </h2>

                <div>
                    <ul>
                        {
                            cartItems.map((item, index) => (
                                <div key={index}>
                                <li>
                                    <h4>{item.id}</h4>
                                    <h4>{item.name}</h4>
                                    <h4>Cantidad: {item.quantity}</h4>
                                    <h5 className="text-mustard font-Text font-bold">${item.price}</h5>
                                </li>

                                <button onClick={() => clickHandler("add", item)}>
                                    <img src={iconAdd} alt="Agregar" />
                                </button>
                                <button onClick={() =>clickHandler("remove", item)}>
                                    <img src={iconRemove} alt="Remover" />
                                    </button>
                                </div>
                            ))
                        }
                    </ul>
                </div>

                <h3>

                <p className="text-mustard font-Text font-bold">
                    Total: ${cartItems.reduce((acc, item) => acc + (item.price * item.quantity),0)}
                </p>
                </h3>

                <div>

                    <button
                    className="text-red font-Text font-bold"
                    onClick={() => setView('checkout')}
                    disabled={cartItems.length === 0}
                    >
                        Confirmar
                    </button>

                    <button
                    disabled={cartItems.length === 0}
                    onClick={()=> setCartItems([])}>
                        Vaciar
                    </button>

                </div>

                <button
                className="absolute top-2 right-2"
                onClick={() =>  setIsModalOpen(false)}>
                    <img src={iconClose} alt="Cerrar" />
                </button>
            </div>
        );
    }

    else if (view === 'checkout')
    {
        modalContent =
        (
            <>
            <h1>Checkout</h1>
            </>
        );
    }

    return (
            <>
                <div
                className="fixed inset-0 bg-black/80 z-50"
                onClick={() => {
                    setView('cart');
                    setIsModalOpen(false)
                    }}>

                    <div
                    className= "fixed right-0 top-0 h-full w-full max-w-sm bg-black/80  backdrop-blur-sm border-l border-mustard"
                    onClick={(e) => e.stopPropagation()}>
                        {modalContent}
                    </div>
                </div>
            </>
    );
}
export default Cart;