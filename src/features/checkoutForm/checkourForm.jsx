import { useForm } from "react-hook-form"
import { useState} from "react";
import Summary from "./summary.jsx";

function CheckoutForm()
{

    const [view, setView] = useState("form");

    const [data,setData] = useState({});

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm({mode:"onBlur"});

    const onSubmit = data =>
        {
            console.log(data);

            setView("summary");
            setData(data);
        };

    const shippingMethod = watch("shipping");
    const paymentMethod = watch("payment");

    const regexName = /^(?:[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*)(?:[ '-](?:[Dd]e|[Dd]el|[Ll]a|[Ll]os|[Ll]as)){0,2}(?:[ '-](?:[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*))?(?:[ '-](?:[Dd]e|[Dd]el|[Ll]a|[Ll]os|[Ll]as)){0,2}(?:[ '-](?:[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*))+$/;
        /* La expresion regular contempla lo siguiente:
        Un nombre que comienza con mayuscula seguido (opcional)de letras minúsculas

        Opcionalmente seguido de un espacio, apostrofo o guion y un articulo que puede comenzar con  mayuscula o minuscula como "de", "del", "la", "los" o "las"
        Opcionalmente seguido de un espacio, apostrofo o guion y un nombre que comienza con mayuscula seguido de letras minúsculas
        Opcionalmente seguido de un espacio, apostrofo o guion y un articulo que puede comenzar con  mayuscula o minuscula como "de", "del", "la", "los" o "las"
        Luego obligatoriamente seguido de un espacio, apostrofo o guion y un nombre que comienza con mayuscula seguido de letras minúsculas
        Ejemplo: "Juan de la Cruz", "Maria del Carmen", "Pedro de la Vega", "Ana de los Santos" */

    const regexPhone = /^(?:11|[2-9]\d{1,3})?(?:\d{6,8})$/;
    const regexAdress = /^[\w\s.,'-]{5,50}$/;
    const regexCreditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/

    if(view === "form")
    {
        return (
        <div id="checkourForm">

            <h2>Formulario </h2>

            <form onSubmit={handleSubmit(onSubmit)}>


                <fieldset>
                    <legend>Información de Contacto</legend>

                <label htmlFor="name"> Nombre:

                    <input
                    id="name"
                    type="text"
                    placeholder="Nombre Completo"
                    {...register("name", {
                        required:{
                            value:true,
                            message:"Este campo es obligatorio",
                        },
                        pattern:{
                            value:regexName,
                            message:"El nombre es invalido",
                        },
                        })} />
                    {errors.name &&
                    <span
                    className="text-red-600 font-bold">
                        ❌{errors.name.message}
                    </span>}
                </label>

                <label htmlFor="telefono">
                    Teléfono:
                    <input
                    id="telefono"
                    placeholder="Ej: 11560599"
                    type="tel"
                    {...register("tel", {
                        required:{
                            value:true,
                            message:"Este campo es obligatorio",
                        },
                        pattern:{
                            value:regexPhone,
                            message:"El telefono es invalido",
                        },
                        })} />
                    {errors.tel &&
                    <span
                    className="text-red-600 font-bold">
                        ❌{errors.tel.message}
                    </span>}
                </label>

                </fieldset>

                <fieldset>
                    <legend>Información de Envío</legend>
                    <div>


                        <label htmlFor="pickup"> Retiro en Local
                        <input
                        type="radio"
                        id="pickup"
                        value="Retiro en el Local"
                        name="shipping"
                        {...register("shipping", {required:true})}
                        />
                        </label>

                        <label htmlFor="delivery"> Envío a Domicilio
                        <input
                        type="radio"
                        id="delivery"
                        value="Envío a Domicilio"
                        name="shipping"
                        {...register("shipping")}
                        />
                        </label>

                        {errors.shipping &&
                        <span
                        className="text-red-600 font-bold">
                        </span>}
                            ❌Seleccione un método de envío

                    </div>

                    {shippingMethod === "delivery" && (

                    <label htmlFor="address"> Dirección:
                        <input
                        id="address"
                        type="text"
                        placeholder="Calle, Número, Piso, Depto"
                        {...register("address", {
                            required:{
                                value:true,
                                message:"La dirección es obligatoria",
                            },
                            pattern:{
                                value:regexAdress,
                                message:"La dirección es invalida",
                            },
                            })} />
                        {errors.address &&
                        <span
                        className="text-red-600 font-bold">
                            ❌{errors.address.message}
                        </span>}
                    </label>

                )}

                </fieldset>

                <fieldset>
                    <legend>Método de Pago</legend>

                    <label htmlFor="cash"> Efectivo
                    <input
                    type="radio"
                    id="cash"
                    value="cash"
                    name="payment"
                    {...register("payment", {required:true})}
                    />
                    </label>

                    <label htmlFor="creditCard"> Tarjeta de Crédito
                    <input
                    type="radio"
                    id="creditCard"
                    value="creditCard"
                    name="payment"
                        {...register("payment")}
                        />
                        </label>

                    {errors.payment &&
                    <span
                    className="text-red-600 font-bold">
                        ❌Seleccione un método de pago
                    </span>}

                    {paymentMethod === "creditCard" && (

                        <div>

                            <label htmlFor="CardNumber"> Numero de Tarjeta:
                                <input
                                type="number"
                                id="CardNumber"
                                placeholder="4444555566667777"
                                {...register("creditCardNumber", {
                                    required:{
                                        value:true,
                                        message:"El número de tarjeta es obligatorio"},
                                    pattern:
                                        {value:regexCreditCard,
                                        message:"El número de tarjeta es inválido"}
                                })}
                                />
                            </label>
                            {errors.creditCardNumber &&
                            <span
                            className="text-red-600 font-bold">
                                ❌{errors.creditCardNumber.message}
                            </span>}
                        </div>
                    )}
                </fieldset>

                <button type="submit">Siguiente</button>
            </form>
        </div>
    );
    }
    else if(view === "summary")
    {
        return(
            <Summary formData={data} />
        )
    }
}

export default CheckoutForm;