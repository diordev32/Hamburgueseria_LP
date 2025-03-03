import "./checkoutForm.css";

function CheckoutForm()
{
    return (
        <div id="Compra" className="checkout-form">

            <h2>Formulario </h2>

            <form>

                <div>
                <label className="input-box">
                    <p>Nombre:</p>

                    <input  className="input-bar" type="text" />
                </label>
                </div>

                <div>
                <label className="input-box">
                    <p>Email:</p>
                    <input  className="input-bar" type="email" />
                </label>
                </div>

                <div>
                <label className="input-box">
                    <p> Dirección de entrega:</p>
                    <input   className="input-bar" type="text" />
                </label>
                </div>

                <div>
                <label className="input-box" >
                    <p>Método de pago:</p>
                    <input  className="input-bar" type="text" />
                </label>
                </div>

                <button type="submit">Buy</button>

            </form>
        </div>
    );
}

export default CheckoutForm;