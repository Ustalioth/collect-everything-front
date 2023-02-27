import React from "react";
import {Link, useParams} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/cartSlice';

export const ProductCard = (props) => {

    const {product} = props;

    const dispatch = useDispatch()

    let {shopName} = useParams();

    return (
        <>
            <div className="card">
                <Link state={{product: product, shopName: shopName}} to={"/shop/"+shopName+"/product/"+product.productId}>
                    <img src={product.photo} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product?.name}</h5>
                        <p className="card-text">{product?.description}</p>
                    </div>
                </Link>
                <div className="card-body">
                    {product?.price} €
                </div>
                <button 
                    onClick={() => dispatch(addToCart(product))}
                    className="btn btn-primary"
                >
                    Ajouter au panier
                </button>
            </div>
        </>
    )
}