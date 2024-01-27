import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="text">
                <Link to="/"><i className="fa-solid fa-house"></i><h3>home</h3></Link>
                <Link to="/contacto"><i className="fa-solid fa-envelope"></i><h3>contacto</h3></Link>
                <div className="h3">
                <i className="fa-solid fa-cake-candles"></i><h3>Happy Cake</h3>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;

