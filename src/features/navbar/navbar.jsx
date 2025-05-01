import "./navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="logo">
                Logo
            </div>

            <ul className="nav-links">
                <li> <a href="#Inicio">Inicio</a> </li>
                <li><a href="#Menu">Menú</a></li>
                <li><a href="#Carrito">Carrito</a></li>
                <li><a href="#Compra">Contacto</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;