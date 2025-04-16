import "./checkoutForm.css";

import {useState} from "react";


function CheckoutForm()
{

    const [err, setError] = useState(
        {
            name: "",
            phone: "",
            address: "",
            payment: ""
        }
    );

    function handleSumit(event)
    {
        event.preventDefault();

        console.log("Formulario enviado");
    }

    function handleNameChange(event)
    {

    const regex = /^(?:[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+)(?:[ '-][A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]+)+$/;


        if (event.target.value === "")
        {
            setError(prevErrors => ({...prevErrors, name: 'El campo no puede estar vacío'}));
            event.target.style.border = "4px solid red";

        }
        else
        {
            setError(prevErrors => ({...prevErrors, name: ''}));
            event.target.style.border = "4px solid green";
        }
    }

    return (
        <div id="Compra" className="checkout-form">

            <h2>Formulario </h2>

            <form onSubmit={handleSumit}>
                <fieldset>
                    <legend>Informaciónde Contacto</legend>

                <label htmlFor="name" className="input-box"> Nombre: </label>

                <input onBlur={handleNameChange} id="name" className="input-bar" type="text" placeholder="Nombre Apellido" />
                <p>
                {err.name}
                </p>

                <label className="input-box">
                    <p>Teléfono:</p>
                    <input  className="input-bar" type="email" />
                </label>

                </fieldset>

                <fieldset>
                    <legend>Información de Pago</legend>
                <label className="input-box" >
                    <p>Método de pago:</p>
                    <input  className="input-bar" type="text" />
                </label>
                </fieldset>
                <button type="submit">Confirmar</button>

            </form>
        </div>
    );
}

export default CheckoutForm;