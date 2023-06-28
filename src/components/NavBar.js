import { NavLink } from "react-router-dom";

export default function NavBar() {
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
          exact to="/meals"
          className="navLink"
          activeClassName="activeNavLink"
        >
          Meals
        </NavLink>
        <NavLink
          exact to="/desserts"
          className="navLink"
          activeClassName="activeNavLink"
        >
          Desserts
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