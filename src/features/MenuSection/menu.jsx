import BurgerCard  from "./burgerCard.jsx";
import React from "react";

import "./menu.css";



function Menu() 
{
    return (
        <div className="menu-section container">

            <h1 className="title">Menú</h1>

            <div className="menu">

                <BurgerCard />
                <BurgerCard />
                <BurgerCard />
                <BurgerCard />

                <BurgerCard />
                <BurgerCard />
                <BurgerCard />
                <BurgerCard />  
            </div>
        </div>
    );
}


export default Menu;