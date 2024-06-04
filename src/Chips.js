import React from "react";
import { Link } from "react-router-dom";
import ChipsImg from "./Chips.png"

function Chips() {
    return (
        <div>
            <img
                src={ChipsImg}
            />
            <Link to="/">BACK</Link>
        </div>
    )
};

export default Chips;