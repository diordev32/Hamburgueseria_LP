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

        console.log(typeof(event.target.value))
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

                <input onBlur={handleNameChange} id="name" className="input-bar" type="text" />
                <p>
                {err.name}
                </p>

                <label className="input-box">
                    <p>Teléfono:</p>
                    <input  className="input-bar" type="email" />
                </label>


                </fieldset>

                <fieldset>
                    <legend>Información de Envío</legend>
                <label className="input-box">
                    <p> Dirección de entrega:</p>
                    <input   className="input-bar" type="text" />
                </label>
                </fieldset>

                <fieldset>
                    <legend>Información de Pago</legend>
                <label className="input-box" >
                    <p>Método de pago:</p>
                    <input  className="input-bar" type="text" />
                </label>
                </fieldset>r
                <button type="submit">Confirmar</button>

            </form>
        </div>
    );
}

export default CheckoutForm;