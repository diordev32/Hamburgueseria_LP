import "./testimonialCard.css";

function TestimonialCard ()
{
    return (
        
        <div className="testimonial-card">

            <div className="testimonial-image">
                <img src="https://dummyimage.com/80x80/e0e0e0/000000.png&text=X" alt="dummy" />
            </div>
            
            <div className="testimonial-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure atque vitae nihil aliquam iste ducimus error nisi autem reiciendis minus. Necessitatibus quibusdam quam autem repellat quis repudiandae quod commodi sed.</p>
            </div>
            
            <div className="testimonial-author">
                <h4>Jhon Doe</h4>
            </div>
        </div>
    )
}

export default TestimonialCard;