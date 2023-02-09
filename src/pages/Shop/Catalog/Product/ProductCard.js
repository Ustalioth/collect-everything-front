import React from "react";
import {Navbar} from "../../Navbar/Navbar";
import {Link, useParams} from "react-router-dom";

export const ProductCard = (props) => {

    const {product} = props;

    let {shopName} = useParams();

    return (
        <>
            <Link state={{product: product, shopName: shopName}} to={"/shop/"+shopName+"/product/"+product.productId}>
                <div className="card">
                    <img src={product.photo} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product?.name}</h5>
                        <p className="card-text">{product?.description}</p>
                    </div>
                    <div className="card-body">
                        {product?.price} €
                    </div>
                </div>
            </Link>
        </>
    )
}