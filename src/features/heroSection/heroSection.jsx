import "./heroSection.css";

function HeroSection()
{
    return (

            <div id="Inicio" className="hero-background">

                <div className="container hero-content">

                    <div className="hero-msg">
                        <div className="hero-title">
                            <h1 className="title"> Tú próxima hamburguesa favorita</h1>
                        </div>

                        <div className="hero-subtitle">
                            <h2> 100% Carne, 100% para vos </h2>
                        </div>

                        <div className="hero-btn">
                            <button>
                                <a href="#Menu">Ver menú</a>
                            </button>
                        </div>
                    </div>

                    <img src="./src/assets/images/heroHamburguesa.png" alt="Hamburguesa deliciosa" className="hero-image"/>
                </div>
            </div>
    );
}

export default HeroSection;