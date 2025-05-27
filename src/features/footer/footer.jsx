import GoogleMap from "./googleMap";
import WhatsAppIcon from "../../assets/images/whatsappIcon.svg";
import InstagramIcon from "../../assets/images/instagramIcon.svg";
import FacebookIcon from "../../assets/images/facebookIcon.png";
import XIcon from "../../assets/images/xIcon.svg";

function Footer()
{
    return (

        <div>

            <div>
                <h3>Nos podes encontrar en</h3>

                <p> <b>Dirección:</b> Av. Mitre y Castelli, Campana</p>
                <GoogleMap />

            </div>

            <div>

                <h3>Contacto</h3>

                <p> <b>Teléfono: (03489)-123456</b></p>
                <p> <b>Correo: elrincon@gmail.com</b>
                </p>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={WhatsAppIcon} alt="WhatsApp" width="40" height="40" />
                </a>
            </div>

            <div>
                <h3>Redes Sociales</h3>

                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img src={FacebookIcon} alt="Facebook" width="50" height="50" />
                </a>

                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img src={InstagramIcon} alt="Instagram" width="50" height="50"/>
                </a>

                <a href="https://www.x.com" target="_blank" rel="noreferrer">
                    <img src={XIcon} alt="Twitter" width="50" height="50"/>
                </a>

            </div>

            <div>

                <h3>Horarios de Atención</h3>
                <p> <b>Lunes a Jueves:</b> 12:00 a 14:00 - 20:00 a 22:00 </p>
                <p> <b>Viernes a Domingo:</b> 11:00 a 15:00 - 19:00 a 24:00 </p>
            </div>
        </div>
    );
}

export default Footer;