import React from "react";
import {Navbar} from "../../Navbar/Navbar";
import {Link, useParams} from "react-router-dom";

export const ProductCard = (props) => {

    const {product} = props;

    let {shopName} = useParams();

    return (
        <>
            <Link state={{product: product, shopName: shopName}} to={"/shop/"+shopName+"/product/"+product.productId}>
                <div className="row">
                    <div className="col-12">
                        IMAGE ICI
                    </div>
                    <div className="col-12">
                        <p className="mb-0">
                            {product?.name}
                        </p>
                        <p>
                            {product?.price}€
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}