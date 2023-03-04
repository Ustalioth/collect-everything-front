import React from "react";
import {Link, useParams} from "react-router-dom";
import { useSelector } from 'react-redux';
import { Navbar as ShopNavbar } from "./Navbar.styles";
import { SearchBar } from "./SearchBar/SearchBar";
import { PersonCircle, Cart3 } from "react-bootstrap-icons";

export const Navbar = (props) => {
  let {shopName} = useParams();

  const cart = useSelector((state) => state.shop.cart);

  const getTotalQuantity = () => {
    return cart?.length;
    //return cart.reduce((total, item) => total + item.quantity, 0);
  }


  return (
    <ShopNavbar>
      <SearchBar />
      <Link to={`/shop/${shopName}`}>homepage</Link>
      <Link state={{shopName: shopName}} to={`/shop/${shopName}/categories`}>categories</Link>
      <Link to={`/shop/${shopName}/login`}>
        <PersonCircle />
      </Link>
      <Link to={`/shop/${shopName}/cart`}>
        <Cart3 />
        <p>{getTotalQuantity() || 0}</p>
      </Link>
    </ShopNavbar>
  );
};
