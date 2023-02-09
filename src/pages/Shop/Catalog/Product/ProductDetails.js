import React from "react";
import {Link, useParams} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Navbar} from "../../Navbar/Navbar";

export const ProductDetails = (props) => {

    const location = useLocation();
    const product = location.state.product;
    let {shopName} = useParams();

    return (
        <>
            <Navbar/>
            <Link className={"btn btn-danger"} to={"/shop/" + shopName + "/catalog"}>
                Back to product list
            </Link>
            <div>
                <p>IMAGE ICI</p>
                <p>{product?.name}</p>
                <p>{product?.price}€</p>
                <p>{product?.description}</p>
                <p>Height : {product.height|0}</p>
                <p>Weight : {product.weight|0}</p>
                <p>In stock : {product.availableInStore ? 'Yes' : 'No'}</p>
                <label for={"quantity"}>Quantity</label>
                <input type={"number"} name={"quantity"}/>
                <button className={"btn btn-success"}>Add to cart</button>
            </div>
        </>
    )
}