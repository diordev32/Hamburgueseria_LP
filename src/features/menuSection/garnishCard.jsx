import CartContext from "../cart/cartContext.jsx";
import {useContext} from "react";

function GarnishCard ({name, description, price, img="https://dummyimage.com/180x100/e0e0e0/000000.png&text=X"})
{
    const {addItem,cartItems} = useContext(CartContext);

    function clickHandler()
    {
        addItem({name, price});
    }

    return(

        <div>

            <img src={img} alt="garnish" />

            <h4>{name}</h4>

            <p>{description}</p>

            <h5>{price}</h5>

            <button onClick={clickHandler}>Agregar al carrito</button>


        </div>
    )
}

export default GarnishCard;