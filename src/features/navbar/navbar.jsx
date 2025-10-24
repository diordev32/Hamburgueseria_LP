import MenuHamburguesa from "./menuHamburguesa";
import { useContext } from "react";
import { ModalIsOpenContext } from "../../App.jsx";

import CartContext from "../cart/cartContext.jsx";

import cartIcon from "../../assets/images/shopping_cart.svg";

function Navbar() {

  const { cartItems } = useContext(CartContext);


  const navLinks =
  [
    { path: "/", label: "Inicio" },
    { path: "#Menu", label: "Productos" },
    { path: "#Contacto", label: "Contacto" },
  ]

  const {isModalOpen, setIsModalOpen} = useContext(ModalIsOpenContext);

  console.log(cartItems.reduce((total, item) => total + item.quantity, 0));

  return (
    <nav className=" flex justify-between items-center sticky top-0 w-full h-10 bg-black text-white z-50 pt-1">

        <div className="pl-4">
          Logo
        </div>
          <ul className="flex flex-row h-full justify-center items-center pr-4 lg:flex gap-6">

            <li
            key='carrito'>
              <div className="flex">
              <img
            className="relative cursor-pointer w-full h-full"
            src={cartIcon}

            onClick={setIsModalOpen.bind(this, true)}/>

              <p className="flex bg-mustard w-5 h-5 rounded-xl text-red justify-center items-center text-l font-bold">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </p>
              </div>
            </li>

            <div className="lg:flex gap-6 hidden">
            {navLinks.map((link) => (

              <li
              key={link.path}
              className="flex h-full items-center">

                <a
                  href={link.path}
                  className="hover:text-gray-900 px-4 py-2 hover:bg-mustard transition-colors duration-300 rounded-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
            </div>

            <li
            key="hamburguesa"
            className="flex h-full items-center justify-center lg:hidden">
                  <MenuHamburguesa
                  className="flex items-center justify-center"
                  navLinks={navLinks} />

            </li>
          </ul>


    </nav>
  );
}
export default Navbar;