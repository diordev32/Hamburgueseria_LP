import BurgerCard  from "./burgerCard.jsx";
import GarnishCard from "./garnishCard.jsx";
import DipCard from "./dipsCards.jsx";
import ProductListContext from "./productList.jsx";
import {useContext} from "react";

import "./menu.css";

function Menu()
{
    const {burgerList, garnishList, dipList} = useContext(ProductListContext);

    return (
        <div id="Menu" className="menu-section container">

            <h1 className="title">Menú</h1>

            <h2 className="title">Hamburguesas</h2>

            <div className="burger-menu">

                {burgerList.map((burger, index) => (
                    <BurgerCard key={index} name={burger.name} description={burger.description} price={burger.price}/>
                ))}

            </div>

            <div>
                <h2 className="title">Guarnición</h2>
                <div className="garnish-menu">

                    {garnishList.map((garnish, index) => (
                        <GarnishCard key={index} name={garnish.name} description={garnish.description} price={garnish.price}/>
                    ))}
                </div>

            </div>

            <h2 className="title">Salsas de autor</h2>

            <div className="dips-menu">

                {dipList.map((dip, index) => (
                    <DipCard key={index} name={dip.name} description={dip.description} price={dip.price}/>
                ))}
            </div>

        </div>
    );
}
export default Menu;