import "./dipsCards.css";


function DipCard()
{
    return (
         <div className="dip-card">

            <img className="dips-image" src="https://dummyimage.com/150x120/e0e0e0/000000.png&text=X" alt="dip" />

            <h4 className="dip-name">Name</h4>

            <h5 className="dip-price">Precio</h5>

        </div>
    )
}

export default DipCard;