import Navbar from "./features/navbar/navbar"
import HeroSection from "./features/heroSection/heroSection.jsx"
import Testimonials from "./features/testimonialsSection/testimonials.jsx"
import Menu from "./features/menuSection/menu.jsx"
import Cart from "./features/cart/cart.jsx"
import CheckoutForm from "./features/checkoutForm/checkourForm.jsx"
import Footer from "./features/footer/footer.jsx"


function App() {
  return (
    <>

      <section>
        <HeroSection/>
      </section>

      <section>
        <Navbar/>
      </section>

      <section>
        <Testimonials/>
      </section>

      <section>
        <Menu/>
      </section>

      <section>
        <Cart/>
      </section>

      <section>
        <CheckoutForm/>
      </section>

      <section>
        <Footer/>
      </section>


    </>
    )
    }
export default App
