import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav_container">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/scan">scan</Link>
        </li>
        <li>
          <Link to="/favoris">Favoris</Link>
        </li>
      </ul>
    </div>
  );
}
