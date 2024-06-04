import React from "react";
import { Link } from "react-router-dom";

function SnackSelection() {
    return (
        <nav className="SnackSelection">
            <Link to="/cheetos">Cheetos </Link>
            <Link to="/chips">Chips </Link>
            <Link to="/chocolate">Chocolate </Link>
        </nav>
    )
}

export default SnackSelection;