import React from "react";
import {Link, useParams} from "react-router-dom";
import { Navbar as ShopNavbar } from "./Navbar.styles";
import { SearchBar } from "./SearchBar/SearchBar";
import { PersonCircle, Cart3 } from "react-bootstrap-icons";

export const Navbar = (props) => {
    let {shopName} = useParams();

    return (
    <ShopNavbar>
      <SearchBar />
      <Link to={"/shop/"+shopName}>homepage</Link>
      <Link state={{shopName: shopName}} to={"/shop/"+shopName+"/categories"}>categories</Link>
        <Link to={"/shop/"+shopName+"/login"}>
          <PersonCircle />
        </Link>
      <Cart3 />
    </ShopNavbar>
  );
};
