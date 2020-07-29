import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link className="navbar-brand" to="#">Navbar</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/repos">Repositories</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;