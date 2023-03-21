import serviceApi from "api/serviceApi";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Orders = (props) => {

    const [orders, setOrders] = useState([]);
    const storeId = useSelector((state) => state.shop.store.storeId);

    useEffect(() => {
        serviceApi.getOrdersByStoreId(storeId)
            .then(({status, data}) => setOrders(data))
            .catch((err) => console.log(err));
    });

    return (
        <>
            
        </>
    );
}