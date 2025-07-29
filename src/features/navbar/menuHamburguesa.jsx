import {useState} from "react";

import menuIcon from "./menu.svg";
import menuCloseIcon from "./close.svg";

function MenuHamburguesa({navLinks}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img src= {menuIcon}
      alt="menuIcon"
      width={32}
      height={32}
      className="cursor-pointer lg:hidden"
      onClick={toggleMenu}/>

      <div className={`fixed top-0 right-0 w-1/2 md:w-1/3 h-screen bg-black shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden z-50 `}>

        <div className="flex justify-end p-4">
          <img src={menuCloseIcon} alt="Cerrar"
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={toggleMenu}/>
        </div>
        <ul className="flex flex-col items-center justify-center h-ful gap-8 ">
        {navLinks.map((link) => (
          <li key={link.path}>
            <a  href={link.path}>{link.label}</a>
          </li>
        ))}
      </ul>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-70 lg:hidden z-40"/>
      )}

    </div>
  );
}
export default MenuHamburguesa;