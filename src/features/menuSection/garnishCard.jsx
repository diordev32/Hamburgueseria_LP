import CartContext from "../cart/cartContext.jsx";
import {useContext} from "react";


import "./garnishCard.css";

function GarnishCard ({name, description, price, img="https://dummyimage.com/180x100/e0e0e0/000000.png&text=X"})
{
    const {addItem,cartItems} = useContext(CartContext);

    function clickHandler()
    {
        addItem({name, price});
    }

    return(

        <div className="garnish-card">

            <img className="garnish-image" src={img} alt="garnish" />

            <h4 className="garnish-name">{name}</h4>

            <p className="garnish-description">{description}</p>

            <h5 className="garnish-price">{price}</h5>

            <button onClick={clickHandler} className="btn">Agregar al carrito</button>


        </div>

    )
}

export default GarnishCard;