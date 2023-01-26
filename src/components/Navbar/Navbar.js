import React from "react";
import { NavBar } from "./Navbar.styles.js";
import { Link } from "react-router-dom";

export const Navbar = (props) => (
  <NavBar>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About us</Link>
      </li>
      <li style={{ float: "right" }}>
        <Link to="/contact-us">Contact us</Link>
      </li>
    </ul>
  </NavBar>
);
