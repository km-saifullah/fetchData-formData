import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/signup">
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
