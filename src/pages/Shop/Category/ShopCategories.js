import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Navbar } from "pages/Shop/Navbar/Navbar";
import { selectCategories, selectStore } from "redux/shopSlice";

export const ShopCategories = (props) => {

    const store =  useSelector(selectStore);
    const categories = useSelector(selectCategories);

    return(
        <>
            <Navbar></Navbar>
            <h1>Categories</h1>
            <ul>
                {categories?.map(category =>
                    <Link key={category.categoryId} state={{category: category}} to={"/shop/"+ store?.storeName +"/category/"+category?.categoryId}>
                        <li key={category.categoryId}>{category.name}</li>
                    </Link>
                )}
            </ul>
        </>
    )
}