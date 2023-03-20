 import React from "react";
 import { Link, useParams } from "react-router-dom";

 export const NavMenu = (props) => {

    let {shopName} = useParams();

    return (
        <>
            <Link to={`/shop/${shopName}/account/informations`}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Mes informations</h5>
                    </div>
                </div>
            </Link>
            <Link to={`/shop/${shopName}/account/orders`}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Mon historique de commandes</h5>
                    </div>
                </div>
            </Link>
        </>
    );
 }
 