import React from "react";
import { Link } from "react-router-dom";

export default function header({ user }) {
  return (
    <div>
      <div className="logo-container">Logo</div>
      <div className="nav-menu-container">
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/display-list">Watch List</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
