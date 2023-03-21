import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { ProductCard } from "../Catalog/Product/ProductCard";
import { useDispatch, useSelector } from 'react-redux';
import { 
    selectShop, 
    fetchStoreByName,
} from "redux/shopSlice";
import {useTranslation} from 'react-i18next';

export const HomePage = () => {
    let { shopName } = useParams();

    const { t } = useTranslation();
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
            <h1>{ t('shop.homepage-welcome') } {shopName}</h1>
            <div className="d-flex">
                {(shop?.products && (shop?.products?.length > 0) && shop?.products?.map(product =>
                    <ProductCard key={product?.productId} product={product}/>
                )) || (
                    <p>Aucun produit</p>
                )}
            </div>
            
        </>
    );
};