import React from "react";
import { Link } from "react-router-dom"

const Sardines = () => {
    return (
        <div className="Sardines">
            <h1>Sardines</h1>
            <h3>SO...DELICIOUS!</h3>
            <nav className="Sardines-back">
                <Link to='/'>
                    Go Back
                </Link>
            </nav>
        </div>
    )
}

export default Sardines;