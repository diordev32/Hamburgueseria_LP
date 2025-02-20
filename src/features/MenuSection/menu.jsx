import BurgerCard  from "./burgerCard.jsx";
import GarnishCard from "./garnishCard.jsx";
import DipCard from "./dipsCards.jsx";


import React from "react";


import "./menu.css";



function Menu() 
{
    return (
        <div className="menu-section container">

            <h1 className="title">Menú</h1>

            <h2 className="title">Hamburguesas</h2>

            <div className="burger-menu">

                <BurgerCard />
                <BurgerCard />
                <BurgerCard />
                <BurgerCard />

                <BurgerCard />
                <BurgerCard />
                <BurgerCard />
                <BurgerCard />  
            </div>


            <div>
                <h2 className="title">Guarnición</h2>
                <div className="garnish-menu">
                    <GarnishCard />
                    <GarnishCard />
                    <GarnishCard />  
                </div>

            </div>

            <h2 className="title">Salsas de autor</h2>

            <div className="dips-menu">

                <DipCard />
                <DipCard />
                <DipCard />

                <DipCard />
                <DipCard />
                <DipCard />

                <DipCard />  
            </div>

        </div>
    );
}


export default Menu;