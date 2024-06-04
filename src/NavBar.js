import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavBar">
            <Link to="/">Vending Machine</Link>
        </nav>
    )
}

export default NavBar;