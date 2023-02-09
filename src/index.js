import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { HomePage as ShopHomePage } from "pages/Shop/Home/HomePage";
import { PageNotFound } from "pages/PageNotFound";
import reportWebVitals from "./reportWebVitals";
import { ContactUs } from "pages/Site/ContactUs/ContactUs";
import { AboutUs } from "pages/Site/AboutUs/AboutUs";
import { Checkout } from "pages/Site/Checkout/Checkout";
import {ShopCategories} from "./pages/Shop/Catalog/Categories/ShopCategories";
import {ProductDetails} from "./pages/Shop/Catalog/Product/ProductDetails";
import {ShopCategory} from "./pages/Shop/Catalog/Categories/ShopCategorySelect";
import {ShopLogin} from "./pages/Shop/Account/ShopLogin";
import { Catalog } from "pages/Shop/Catalog/Catalog";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shop/:shopName" element={<ShopHomePage />} />
      <Route path="/shop/:shopName/categories" element={<ShopCategories />} />
      <Route path="/shop/:shopName/category/:categoryId" element={<Catalog />} />
      <Route path="/shop/:shopName/product/:idProduct" element={<ProductDetails />} />
      <Route path="/shop/:shopName/login" element={<ShopLogin />} />
      <Route path="/shop/:shopName/catalog" element={<Catalog />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
