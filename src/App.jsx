import NavBar from "./features/navbar/navbar.jsx";
import HeroSection from "./features/heroSection/heroSection.jsx";
import Testimonials from "./features/testimonialsSection/testimonials.jsx";
import Menu from "./features/menuSection/menu.jsx";
import Cart from "./features/cart/cart.jsx";
import CheckoutForm from "./features/checkoutForm/checkourForm.jsx";
import Footer from "./features/footer/footer.jsx";
import { ProductListProvider } from "./features/menuSection/productList.jsx";
import {CartProvider} from "./features/cart/cartContext.jsx";
import Container from "./features/components/container.jsx";
import { useState,createContext } from "react";

export const ModalIsOpenContext = createContext();

function App() {

  const [isModalOpen,setIsModalOpen] = useState(false);

  return (
    <div
    className="font-Roboto text-white bg-neutral-950">
      <ModalIsOpenContext.Provider value={{isModalOpen,setIsModalOpen}}>
        <NavBar/>
        <HeroSection/>
        <Container>
          <Testimonials/>
          <ProductListProvider>
            <CartProvider>
            <Menu/>
            <Cart/>
            </CartProvider>
          </ProductListProvider>
        </Container>
      </ModalIsOpenContext.Provider>
    </div>
    )};

export default App;
