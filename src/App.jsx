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

import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

export const ModalIsOpenContext = createContext();


function MainView() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Container>
        <Testimonials/>
            <Menu/>
            <Cart/>
      </Container>
      <Footer/>
    </>
  );
};

function App() {
  const [isModalOpen,setIsModalOpen] = useState(false);

  return (
    <div className="font-Roboto text-white bg-neutral-950">
      <ModalIsOpenContext.Provider value={{isModalOpen,setIsModalOpen}}>

        <ProductListProvider>
          <CartProvider>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainView/>}/>

            <Route path="/checkout" element={<CheckoutForm/>}/>
          </Routes>
        </BrowserRouter>

          </CartProvider>
        </ProductListProvider>

      </ModalIsOpenContext.Provider>
    </div>
  );
};

export default App;