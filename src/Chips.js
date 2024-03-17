import React from "react";
import { Link } from "react-router-dom"

const Chips = () => {
  return (
    <div className="Chips">
      <h1>Chips</h1>
      <h3>SO MUCH SALT!!</h3>
      <nav className="Chips-back">
        <Link to='/'>
          Go Back
        </Link>
      </nav>
    </div>
  )
}

export default Chips;