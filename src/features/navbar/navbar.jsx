import MenuHamburguesa from "./menuHamburguesa";
import { useContext } from "react";
import { ModalIsOpenContext } from "../../App.jsx";


function Navbar() {

  const navLinks =
  [
    { path: "/", label: "Inicio" },
    { path: "#Menu", label: "Productos" },
    { path: "/contacto", label: "Contacto" },
  ]

  const {isModalOpen, setIsModalOpen} = useContext(ModalIsOpenContext);

  return (
    <nav className=" flex justify-between items-center sticky top-0 w-full h-10 bg-black text-white z-50">

        <div className="pl-4">
          Logo
        </div>
          <ul className="flex-row h-full justify-center items-center hidden pr-4 lg:flex gap-6">
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
            <li
            key='carrito'
            className="flex h-full items-center">
              <button
              onClick={() => setIsModalOpen(!isModalOpen)}
              className= "hover:text-gray-900 px-4 py-2 hover:bg-mustard transition-colors duration-300 rounded-lg hover:cursor-pointer"
              >
                Carrito
              </button>
            </li>
          </ul>

        <div className="flex pr-4 lg:hidden">
            <MenuHamburguesa
            className="flex items-center justify-center"
            navLinks={navLinks} />
        </div>
    </nav>
  );
}
export default Navbar;