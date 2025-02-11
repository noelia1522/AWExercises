import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <nav>
        <ul className="fixed-header">
          <li className="litem">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/posts"
            >
              Posts
            </NavLink>
          </li>
          <li className="litem">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li className="litem">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li className="litem">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/quiz"
            >
              Quiz
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
