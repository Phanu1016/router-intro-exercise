import React from "react";
import { Link } from "react-router-dom";


const VendingMachine = () => {
    return (
        <div>
            <div className="VendingMachine">
                <h3>Vending machine!</h3>
            </div>
            <h3>Pick a snack</h3>
            <div className="VendingMachine-choices">
                <nav className="VendingMachine-nav-links">
                    <Link exact to='/soda'>
                        Soda
                    </Link>
                    <Link exact to='/chips'>
                        Chips
                    </Link>
                    <Link exact to='/sardines'>
                        Sardines
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default VendingMachine;  