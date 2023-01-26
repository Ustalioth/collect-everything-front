import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useLocation, useParams} from "react-router-dom";
import {Navbar} from "../../Navbar/Navbar";

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
                    )
            });
    }, [])

    return(
        <>
            <Navbar></Navbar>
            <h1>Categories</h1>
            <li>
            {categories && categories?.map(category =>
                <Link state={{category: category}} to={"/shop/"+shopName+"/category/"+category?.categoryId}>
                    <ul>{category.name}</ul>
                </Link>
            )
            }
            </li>
        </>
    )
}