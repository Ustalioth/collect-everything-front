import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Navbar} from "../Navbar/Navbar";
// import {instance} from "../../../services/Axios";
import {ProductCard} from "../Catalog/Product/ProductCard";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setStore } from "redux/shopSlice";

export const HomePage = () => {
    let {shopName} = useParams();

    const dispatch = useDispatch();

    const [products, setProducts] = useState(null);
    useEffect(() => {

        axios.get(process.env.REACT_APP_API_ADDRESS + 'store/name/' + shopName)
            .then(res => {
                dispatch(setStore(res.data));
                axios.get(process.env.REACT_APP_API_ADDRESS + 'product/product/all/' + res?.data?.storeId)
                    .then(resProducts =>
                        setProducts(resProducts.data)
                    )
        });
    }, [shopName]);

    return (
        <>
            <Navbar />
            <h1>Bienvenue sur la boutique {shopName}</h1>
            <div className="d-flex">
                {products && products?.map(product =>
                    <ProductCard key={product?.productId} product={product}/>
                )}
            </div>
            
        </>
    );
};