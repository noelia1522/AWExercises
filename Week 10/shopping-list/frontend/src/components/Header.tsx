import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="fixed-header">
          <li className="listitem">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="listitem">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/shoppinglist"
            >
              ShoppingList
            </NavLink>
          </li>
          <li className="listitem">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li className="listitem">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/registration"
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
