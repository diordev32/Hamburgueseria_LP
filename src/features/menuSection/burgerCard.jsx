import CartContext from "../cart/cartContext.jsx";

import {useContext} from "react";

import "./burgerCard.css";

function BurgerCard ({name, description, price, image= "https://dummyimage.com/200x200/e0e0e0/000000.png&text=X"})
{

    const {addItem,cartItems} = useContext(CartContext);

    function clickHandler()
    {
        addItem({name, price});
    }


    return(

        <div className="burger-card">

            <img className="burger-image" src={image} alt="burger"/>

            <h4 className="burger-name">{name} </h4>

            <p className="burger-description">{description}</p>

            <h5 className="burger-price">{price}</h5>

            <button onClick={clickHandler} className="btn">Agregar al carrito</button>

        </div>
    )
}

export default BurgerCard;