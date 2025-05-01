import "./checkoutForm.css";
import {useState,useEffect} from "react";


function CheckoutForm()
{

    const [err, setError] = useState(
        {
            name: "",
            phone: "",
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
        const regexName = /^(?:[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*)(?:[ '-](?:[Dd]e|[Dd]el|[Ll]a|[Ll]os|[Ll]as)){0,2}(?:[ '-](?:[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*))?(?:[ '-](?:[Dd]e|[Dd]el|[Ll]a|[Ll]os|[Ll]as)){0,2}(?:[ '-](?:[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*))+$/;

        /* La expresion regular contempla lo siguiente:
        Un nombre que comienza con mayuscula seguido (opcional)de letras minúsculas
        Opcionalmente seguido de un espacio, apostrofo o guion y un articulo que puede comenzar con  mayuscula o minuscula como "de", "del", "la", "los" o "las"
        Opcionalmente seguido de un espacio, apostrofo o guion y un nombre que comienza con mayuscula seguido de letras minúsculas
        Opcionalmente seguido de un espacio, apostrofo o guion y un articulo que puede comenzar con  mayuscula o minuscula como "de", "del", "la", "los" o "las"
        Luego obligatoriamente seguido de un espacio, apostrofo o guion y un nombre que comienza con mayuscula seguido de letras minúsculas
        Ejemplo: "Juan de la Cruz", "Maria del Carmen", "Pedro de la Vega", "Ana de los Santos" */

        if (!regexName.test(event.target.value)||(event.target.value === ""))
        {
            setError(prevErrors => ({...prevErrors, name: 'Nombre inválido'}));
            event.target.style.border = "4px solid red";
        }
        else
        {
            setError(prevErrors => ({...prevErrors, name: ''}));
            event.target.style.border = "4px solid green";
        }
    }

    function handlePhoneChange(event)
    {

    const regexPhone = /^(?:11|[2-9]\d{1,3})?(?:\d{6,8})$/;
/*
    La expresion regular regexPhone mira que se cumplan las siguientes condiciones:

    Solo debe contener dígitos (0-9).
    *   La longitud total de la cadena debe ser de 8 a 12 caracteres.
    *   Si la cadena representa un número con código de área, la estructura debe ser:
        -   El código de área tiene una longitud de 2, 3 o 4 dígitos.
        -   El primer dígito del código de área debe estar entre 2 y 9, excepto si el código de área es específicamente "11" (Capital Federal).
        -   El resto del número (el número de abonado) debe tener una longitud de 6, 7 u 8 dígitos, de manera que la longitud total de la cadena (código de área + abonado) esté entre 8 y 12.
*/

        if (!regexPhone.test(event.target.value)||(event.target.value === ""))
        {
            setError(prevErrors => ({...prevErrors, phone:'Numero inválido'}));
            event.target.style.border = "4px solid red";
        }
        else
        {
            setError(prevErrors => ({...prevErrors, phone: ''}));
            event.target.style.border = "4px solid green";
        }
    }

    useEffect(() =>
    {
        console.log(err);
    }
    ,[err]);

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
                    <input  onBlur={handlePhoneChange} className="input-bar" placeholder="Ej: 011560599" type="email" />
                    <p>
                        {err.phone}
                    </p>

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