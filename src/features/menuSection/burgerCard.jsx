import CartContext from "../cart/cartContext.jsx";

import {useContext} from "react";

function BurgerCard ({name, description, price, image= "https://dummyimage.com/200x200/e0e0e0/000000.png&text=X"})
{

    const {addItem,cartItems} = useContext(CartContext);

    function clickHandler()
    {
        addItem({name, price});
    }

    return(

        <div>

            <img src={image} alt="burger"/>

            <h4>{name} </h4>

            <p>{description}</p>

            <h5>{price}</h5>

            <button onClick={clickHandler}>Agregar al carrito</button>

        </div>
    )
}

export default BurgerCard;