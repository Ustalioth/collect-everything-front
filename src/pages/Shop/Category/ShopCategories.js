import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLocation, useParams} from "react-router-dom";
import {Navbar} from "pages/Shop/Navbar/Navbar";
import testData from "services/Data/categories.json";

export const ShopCategories = (props) => {
    const [categories, setCategories] = useState(null);

    const location = useLocation();

    let {shopName} = useParams();


    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ADDRESS + 'store/api/store/' + shopName)
            .then(res => {
                axios.get(process.env.REACT_APP_API_ADDRESS + 'product/api/categories/store/' + res?.data?.storeId)
                    .then(res =>
                        setCategories(res.data)
                    );
            })
            .catch(err => {
                setCategories(testData.shop.test);
            });
    }, [])

    return(
        <>
            <Navbar></Navbar>
            <h1>Categories</h1>
            <ul>
            {categories && categories?.map(category =>
                <Link state={{category: category}} to={"/shop/"+shopName+"/category/"+category?.categoryId}>
                    <li>{category.name}</li>
                </Link>
            )
            }
            </ul>
        </>
    )
}