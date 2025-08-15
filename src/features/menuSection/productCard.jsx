import CartContext from "../cart/cartContext.jsx";

import {useContext} from "react";

function ProductCard ({productid, name, description, price, image= "https://dummyimage.com/200x200/e0e0e0/000000.png&text=X",altCaption="Imagen del producto"})
{

    const {addItem,cartItems} = useContext(CartContext);

    function clickHandler()
    {
        addItem({productid,name, price, image, description, altCaption});
    }

    return(

        <figure className="relative flex flex-col items-center text-center border border-mustard rounded-lg shadow-lg shadow-mustard/20 bg-mustard/10 backdrop-blur-3xl w-full md:w-[280px] lg:w-[280px] font-Text p-3 lg:p-4">

            <div className="flex flex-col items-center justify-center">
                <img
                src={image}
                alt={altCaption}
                className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mb-2 lg:mb-3"
                />

                <figcaption className="text-2xl lg:text-3xl font-bold mb-1 text-mustard ">
                    {name}
                </figcaption>
            </div>

            <p className="text-sm mb-3 lg:mb-4">{description}</p>

            <p className="text-xl lg:text-2xl mb-3 lg:mb-4">${price}</p>

            <button onClick={clickHandler} className="font-bold lg:text-lg py-2.5 px-5 lg:py-2 lg:px-4 bg-red rounded-full lg:hover:cursor-pointer">Agregar</button>

        </figure>
    )
}

export default ProductCard;