import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";
import "./styles.css";

const Navbar =  () => {

    return (
        <nav className="navbar">            
            <div className="logo">
            <Link to="/">
                Xilitla <span>Store</span></Link>
            </div>
            <ul className="nav-ul">
                <Link className="li" to="/">Home</Link>
                <Link className="li" to="abaut">Abaut</Link>
                <Link className="li" to="contact">Contact</Link>
                <Link className="li" to="/category/home-decoration">Decoracion</Link>
                <Link className="li" to="/category/groceries">Alimentos</Link>
            </ul>
            <CartWidget />
        </nav>
    );
}

//exportaciones por fefecto, no hay diferencia entre una y otra
export default Navbar;

//los componentes siempre los exportamos por defecto
//crear un componente para footer se crea carpeta para cada uno