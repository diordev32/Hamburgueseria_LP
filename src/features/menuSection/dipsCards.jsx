import "./dipsCards.css";


function DipCard({name, price,description, img="https://dummyimage.com/150x120/e0e0e0/000000.png&text=X"})
{
    return (
        <div className="dip-card">

            <img className="dips-image" src={img} alt="dip" />

            <h4 className="dip-name">{name}</h4>

            <p className="dip-description">{description}</p>

            <h5 className="dip-price">{price}</h5>

        </div>
    )
}

export default DipCard;