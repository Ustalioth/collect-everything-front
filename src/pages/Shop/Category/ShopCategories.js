import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCategories, setProducts } from "redux/shopSlice";
import axios from "axios";
import {Link, useLocation, useParams} from "react-router-dom";
import {Navbar} from "pages/Shop/Navbar/Navbar";
import testData from "services/Data/categories.json";

export const ShopCategories = (props) => {

    const location = useLocation();
    const dispatch = useDispatch();

    const store =  useSelector((state) => state.shop.store);

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ADDRESS + 'product/categories/' + store.storeId)
            .then(res => setCategories(dispatch(setCategories(res.data))))
            .catch(err => console.log(err));
    }, [store.storeId]);

    return(
        <>
            <Navbar></Navbar>
            <h1>Categories</h1>
            <ul>
                {categories && categories?.map(category =>
                    <Link key={category.categoryId} state={{category: category}} to={"/shop/"+ store?.storeName +"/category/"+category?.categoryId}>
                        <li key={category.categoryId}>{category.name}</li>
                    </Link>
                )}
            </ul>
        </>
    )
}