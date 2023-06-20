import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="container navBar">
        <NavLink
          exact to="/"
          className="navLink"
          activeClassName="activeNavLink"          
        >
          Home
        </NavLink>
        <NavLink
          exact to="/food"
          className="navLink"
          activeClassName="activeNavLink"
        >
          Food
        </NavLink>
        <NavLink
          exact to="/bookings"
          className="navLink"
          activeClassName="activeNavLink"
        >
          Bookings
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;