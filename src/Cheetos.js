import React from "react";
import { Link } from "react-router-dom";
import CheetosImage from "./Cheetos.png"

function Cheetos() {
    return (
        <div>
            <img
                src={CheetosImage}
            />
            <Link to="/">BACK</Link>
        </div>
    )
};

export default Cheetos;