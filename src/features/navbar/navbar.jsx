import "./navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="logo">
                Logo
            </div>

            <ul className="nav-links">
                <li> <a href="#">Inicio</a> </li>
                <li><a href="#">Menú</a></li>
                <li><a href="#">Carrito</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;