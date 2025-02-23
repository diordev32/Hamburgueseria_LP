import "./testimonials.css";
import TestmonialCard from "./testimonialCard.jsx";


function Testimonials()
{
    return (

        <>
            <div className="testimonials container">

                <h1 className="testimonial-title title">Lo que dicen nuestros clientes</h1>

                <div className="testimonials-cards">
                    <TestmonialCard />
                    <TestmonialCard />
                    <TestmonialCard />
                    <TestmonialCard />
                </div>

            </div>
        </>
    )
}

export default Testimonials;