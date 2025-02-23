import "./burgerCard.css";

function BurgerCard ()
{
    return(
        
        <div className="burger-card">

            <img className="burger-image" src="https://dummyimage.com/200x200/e0e0e0/000000.png&text=X" alt="burger" />

            <h4 className="burger-name">Name</h4>

            <p className="burger-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque autem magnam quae laudantium.</p>

            <h5 className="burger-price">Precio</h5>

        </div>
        
    )
}

export default BurgerCard;