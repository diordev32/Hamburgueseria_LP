import BurgerCard  from "./burgerCard.jsx";
import GarnishCard from "./garnishCard.jsx";
import DipCard from "./dipsCards.jsx";
import ProductListContext from "./productList.jsx";
import {useContext} from "react";

function Menu()
{
    const {burgerList, garnishList, dipList} = useContext(ProductListContext);

    return (
        <div id="Menu">

            <h1>Menú</h1>

            <h2>Hamburguesas</h2>

            <div>

                {burgerList.map((burger, index) => (
                    <BurgerCard key={index} name={burger.name} description={burger.description} price={burger.price}/>
                ))}

            </div>

            <div>
                <h2>Guarnición</h2>
                <div>

                    {garnishList.map((garnish, index) => (
                        <GarnishCard key={index} name={garnish.name} description={garnish.description} price={garnish.price}/>
                    ))}
                </div>

            </div>

            <h2>Salsas de autor</h2>

            <div>

                {dipList.map((dip, index) => (
                    <DipCard key={index} name={dip.name} description={dip.description} price={dip.price}/>
                ))}
            </div>

        </div>
    );
}
export default Menu;