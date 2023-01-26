import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation, useParams} from "react-router-dom";
import {ProductCard} from "../Product/ProductCard";
import {Navbar} from "../../Navbar/Navbar";

export const ShopCategory = (props) => {

    const location = useLocation();
    const category = location.state.category;
    let {shopName} = useParams();

    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ADDRESS + 'store/api/store/' + shopName)
            .then(res => {
                axios.get(process.env.REACT_APP_API_ADDRESS + 'product/api/category/' + res?.data?.storeId + '/' + category?.categoryId)
                    .then(res =>
                        setProducts(res.data.productEntities)
                    )
            });
    }, [])

    return(
        <>
            <Navbar></Navbar>
            <div className="d-flex">
                {products && products?.map(product =>
                    <ProductCard product={product}/>
                )
                }
            </div>
        </>
    )
}