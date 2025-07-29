import TestimonialCard from "./testimonialCard.jsx";

function Testimonials()
{
    return (
        <div className=" py-16 lg:py-24">

            <h1 className=" text-2xl lg:text-4xl text-center pb-10">Lo que dicen nuestros clientes</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 place-items-center">
                <TestimonialCard card={
                    {quote:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque vitae nihil aliquam iste ducimus error nisisit autem reiciendis minus. Necessitatibus quibusdam quam autem repellat quis repudiandae quod commodi sed.',
                    author:'Jhon Doe',
                    img:'https://dummyimage.com/60x60/e0e0e0/000000.png&text=X'}}/>
                <TestimonialCard card={
                    {quote:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque vitae nihil aliquam iste ducimus error nisisit autem reiciendis minus. Necessitatibus quibusdam quam autem repellat quis repudiandae quod commodi sed.',
                    author:'Jhon Doe',
                    img:'https://dummyimage.com/60x60/e0e0e0/000000.png&text=X'}}/>
                <TestimonialCard  card={
                    {quote:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque vitae nihil aliquam iste ducimus error nisisit autem reiciendis minus. Necessitatibus quibusdam quam autem repellat quis repudiandae quod commodi sed.',
                    author:'Jhon Doe',
                    img:'https://dummyimage.com/60x60/e0e0e0/000000.png&text=X'}}/>
                <TestimonialCard  card={
                    {quote:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque vitae nihil aliquam iste ducimus error nisisit autem reiciendis minus. Necessitatibus quibusdam quam autem repellat quis repudiandae quod commodi sed.',
                    author:'Jhon Doe',
                    img:'https://dummyimage.com/60x60/e0e0e0/000000.png&text=X'}}/>
            </div>
        </div>
    )
}

export default Testimonials;