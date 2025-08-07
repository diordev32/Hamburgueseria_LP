import PropTypes from 'prop-types';

function TestimonialCard ({card})
{
    return (

        <figure className="border border-mustard rounded-lg shadow-lg shadow-mustard/20 bg-mustard/10 backdrop-blur-3xl p-2">

            <blockquote className=" text-center">
                <p className="font-Text">
                    {card.quote}
                </p>
            </blockquote>

            <figcaption className="flex items-center mt-4">
            <div className="rounded-full overflow-hidden mr-4">
                <img src="https://dummyimage.com/60x60/e0e0e0/000000.png&text=X" alt="dummy"/>
            </div>
            <div className="font-Text font-bold">
                <h4>Jhon Doe</h4>
            </div>
            </figcaption>
        </figure>
    )
}

TestimonialCard.propTypes = {
    card: PropTypes.shape({
        quote: PropTypes.string.isRequired,
    }).isRequired,
};

export default TestimonialCard;