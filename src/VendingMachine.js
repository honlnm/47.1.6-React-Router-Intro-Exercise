import React from "react";
import SnackSelection from "./SnackSelection";

function VendingMachine() {
    return (
        <div>
            <div>
                <p>Hello. I am a vending machine. What would you like to eat?</p>
            </div>
            <SnackSelection />
        </div>

    )
}

export default VendingMachine;