import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { ProductCard } from "../Catalog/Product/ProductCard";
import { useDispatch, useSelector } from 'react-redux';
import { 
    selectShop, 
    fetchStoreByName,
} from "redux/shopSlice";

export const HomePage = () => {
    let {shopName} = useParams();

    const dispatch = useDispatch();
    const shop = useSelector(selectShop);

    useEffect(() => {
        try {
            dispatch(fetchStoreByName(shopName));
        } catch (err) {
            console.log("Error while fetching store details: " + err);
        }
    }, [dispatch, shopName]);

    return (
        <>
            <Navbar />
            <h1>Bienvenue sur la boutique {shopName}</h1>
            <div className="d-flex">
                {(shop?.products && (shop.products?.length > 0) && shop.products?.map(product =>
                    <ProductCard key={product?.productId} product={product}/>
                )) || (
                    <p>Aucun produit</p>
                )}
            </div>
            
        </>
    );
};