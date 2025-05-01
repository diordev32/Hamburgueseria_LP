import Navbar from "./features/navbar/navbar.jsx";
import HeroSection from "./features/heroSection/heroSection.jsx";
import Testimonials from "./features/testimonialsSection/testimonials.jsx";
import Menu from "./features/menuSection/menu.jsx";
import Cart from "./features/cart/cart.jsx";
import CheckoutForm from "./features/checkoutForm/checkourForm.jsx";
import Footer from "./features/footer/footer.jsx";
import { ProductListProvider } from "./features/menuSection/productList.jsx";
import {CartProvider} from "./features/cart/cartContext.jsx";

function App() {
  return (
    <>

      <CartProvider>

      <section>
        <HeroSection/>
      </section>

      <Navbar className= "navbar"/>

      <section>
        <Testimonials/>
      </section>

      <section>
        <ProductListProvider>
            <Menu/>
        </ProductListProvider>
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
        </CartProvider>
    </>
    )
    }
export default App
