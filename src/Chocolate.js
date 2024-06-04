import React from "react";
import { Link } from "react-router-dom";
import ChocolateImg from "./Chocolate.png"

function Chocolate() {
    return (
        <div>
            <img
                src={ChocolateImg}
            />
            <Link to="/">BACK</Link>
        </div>
    )
}

export default Chocolate;