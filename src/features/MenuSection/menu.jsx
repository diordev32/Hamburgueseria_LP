import BurgerCard  from "./burgerCard.jsx";
import GarnishCard from "./garnishCard.jsx";
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
                <h2 className="title">Papas</h2>
                <div className="garnish-menu">
                    <GarnishCard />
                    <GarnishCard />
                    <GarnishCard />
                    
                </div>

            </div>



        </div>
    );
}


export default Menu;