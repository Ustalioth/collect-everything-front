import React from "react";
import { NavBar } from "./Navbar.styles.js";
import { Link } from "react-router-dom";

export const Navbar = (props) => (
  <NavBar>
    <ul>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/about-us">A propos</Link>
      </li>
      <li style={{ float: "right" }}>
        <Link to="/contact-us">Contactez nous</Link>
      </li>
    </ul>
  </NavBar>
);
