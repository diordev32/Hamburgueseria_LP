import "./footer.css";

function Footer() 
{
    return (
    
        <div className="footer container">

            <div className="direction">

                <h3>Nos podes encontar en</h3>

                <p> <b>Dirección:</b> Siempre Viva 742, Springfield </p>

                <img src="https://dummyimage.com/350x300/e0e0e0/000000.png&text=X" alt="Mapa" />
                
            </div>

            <div className="contact">
        
                <h3>Contacto</h3>

                <p> <b>Teléfono:</b></p>
                <p> <b>Correo:</b></p>
                <button className="Whatsapp btn">Whatsapp</button>
            </div>


            <div className="social">
                <h3>Redes Sociales</h3>

                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img src="https://dummyimage.com/50x50/e0e0e0/000000.png&text=FB" alt="Facebook" />
                </a>

                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">       
                    <img src="https://dummyimage.com/50x50/e0e0e0/000000.png&text=IG" alt="Instagram" />
                </a>

                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <img src="https://dummyimage.com/50x50/e0e0e0/000000.png&text=TW" alt="Twitter" />
                </a>

            </div>

            <div className="opening-hours">
            
                <h3>Horarios de Atención</h3>
                <p> <b>Lunes a Jueves:</b> 12:00 a 14:00 - 20:00 a 22:00 </p>
                <p> <b>Viernes a Domingo:</b> 11:00 a 15:00 - 19:00 a 24:00 </p>
            </div>


        </div>
        
    );
}

export default Footer;