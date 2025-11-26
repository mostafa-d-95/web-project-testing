import {Link} from "react-router-dom";
import React from "react";

const NavBar=()=> {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="nav-logo">
                    Maallem
                </Link>
            </div>
            <div className="navbar-right">
                <Link to="/">Home</Link>
                <Link to="/search">Find provider</Link>
                <Link to="/provider">Provider dashboard</Link>
            </div>
        </nav>
    );
}
export default NavBar;