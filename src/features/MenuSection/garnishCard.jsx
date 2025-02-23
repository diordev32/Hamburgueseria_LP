import "./garnishCard.css";

function GarnishCard ()
{
    return(
        
        <div className="garnish-card">

            <img className="garnish-image" src="https://dummyimage.com/180x100/e0e0e0/000000.png&text=X" alt="garnish" />

            <h4 className="garnish-name">Name</h4>

            <p className="garnish-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque autem magnam quae laudantium.</p>

            <h5 className="garnish-price">Precio</h5>

        </div>
        
    )
}

export default GarnishCard;