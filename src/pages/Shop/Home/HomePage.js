import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Navbar} from "../Navbar/Navbar";
// import {instance} from "../../../services/Axios";
import {ProductCard} from "../Catalog/Product/ProductCard";
import axios from 'axios';

export const HomePage = () => {
    let {shopName} = useParams();

    const [products, setProducts] = useState(null);
    useEffect(() => {

        axios.get(process.env.REACT_APP_API_ADDRESS + 'store/api/store/' + shopName)
            .then(res => {
                axios.get(process.env.REACT_APP_API_ADDRESS + 'product/api/products/storeid/' + res?.data?.storeId)
                    .then(resProducts =>
                        setProducts(resProducts.data)
                    )
        });
    }, []);

    return (
        <>
            <Navbar/>
            <h1>Bienvenue sur la boutique {shopName}</h1>
            <div className="d-flex">
                {products && products?.map(product =>
                    <ProductCard product={product}/>
                )
                }
            </div>
            
        </>
    );
};