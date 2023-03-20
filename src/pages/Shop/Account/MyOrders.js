import serviceApi from "api/serviceApi";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavMenu } from "./NavMenu";

export const MyOrders = (props) => {

    const customerId = useSelector((state) => state.user.customerId);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        serviceApi.getOrdersByCustomerId(customerId)
            .then(({status, data}) => setOrders(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="container">
                <h1>Mon compte</h1>
                <div className="mt-4 d-flex">
                    <NavMenu />
                </div>
                <h5>Mes commandes</h5>
                {((orders.length > 0) && 
                        orders?.map(order => <p>{order.orderId}</p>)
                ) || (
                    <p>Aucune commande</p>
                )}
            </div>
        </>
    );
}