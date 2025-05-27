import MenuHamburguesa from "./menuHamburguesa";

function Navbar() {

  const navLinks =
  [
    { path: "/", label: "Inicio" },
    { path: "/productos", label: "Productos" },
    { path: "/contacto", label: "Contacto" },
    { path: "/carrito", label: "Carrito" },

  ]
  return (
    <nav className=" flex justify-between items-center sticky top-0 w-full h-8 bg-black text-white" >

        <div className="pl-4">
          Logo
        </div>
          <ul className="flex-row h-full justify-center items-center hidden pr-4 lg:flex">
            {navLinks.map((link) => (
              <li
              key={link.path}>
                <a
                  href={link.path}
                  className="hover:text-gray-900 px-4 text-white py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
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