import CartContext from "../cart/cartContext.jsx";
import {useContext} from "react";


import "./dipsCards.css";


function DipCard({name, price,description, img="https://dummyimage.com/150x120/e0e0e0/000000.png&text=X"})
{


    const {addItem,cartItems} = useContext(CartContext);

    function clickHandler()
    {
        addItem({name, price});
    }


    return (
        <div className="dip-card">

            <img className="dips-image" src={img} alt="dip" />

            <h4 className="dip-name">{name}</h4>

            <p className="dip-description">{description}</p>

            <h5 className="dip-price">{price}</h5>

            <button onClick={clickHandler} className="btn">Agregar al carrito</button>


        </div>
    )
}

export default DipCard;