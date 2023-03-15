import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Navbar as ShopNavbar } from "./Navbar.styles";
import { SearchBar } from "./SearchBar/SearchBar";
import { PersonCircle, Cart3 } from "react-bootstrap-icons";
import { useTranslation } from 'react-i18next';

export const Navbar = (props) => {
  let {shopName} = useParams();

  const {t, i18n} = useTranslation();
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    return cart?.length;
    //return cart.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <ShopNavbar>
      <SearchBar />
      <Link to={`/shop/${shopName}`}>{ t('navigation.homepage') }</Link>
      <Link state={{shopName: shopName}} to={`/shop/${shopName}/categories`}>{ t('navigation.categories') }</Link>
      <Link to={`/shop/${shopName}/login`}>
        <PersonCircle />
      </Link>
      <span onClick={() => i18n.changeLanguage('fr')}>FR</span>
      <span onClick={() => i18n.changeLanguage('en')}>EN</span>
      <Link to={`/shop/${shopName}/cart`}>
        <Cart3 />
        <p>{getTotalQuantity() || 0}</p>
      </Link>
    </ShopNavbar>
  );
};
