import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from "react-router-dom";
import axios from "axios";
import { Navbar } from "pages/Shop/Navbar/Navbar";
import { ProductCard } from "./Product/ProductCard";
import { ShopCategorySelect } from "./Categories/ShopCategorySelect";

export const Catalog = () => {

    let { categoryId } = useParams();

    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState({categoryId: parseInt(categoryId)});

    const [productsByCategory, setProductsByCategory] = useState([]);
    const [sorting, setSorting] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [maxNumberProductsPerPage, setMaxNumberProductsPerPage] = useState(8);
    const [pageCount, setPageCount] = useState(1);

    const handleChangeSorting = (e) => {
        setSorting(e.target.value);
        if (e.target.value === "asc") {
            setProductsByCategory(productsByCategory?.sort((p1, p2) => p1.price - p2.price));
        } else {
            setProductsByCategory(productsByCategory?.sort((p1, p2) => p2.price - p1.price));
        };
    }

    useEffect(() => {
        setPageCount(Math.ceil(productsByCategory?.length/maxNumberProductsPerPage) || 1)
    }, [productsByCategory, maxNumberProductsPerPage]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ADDRESS + '/product/category/' + selectedCategory?.categoryId)
            .then(res => {
                if (sorting === "asc") {
                    setProductsByCategory(res.data.products?.sort((p1, p2) => p1.price - p2.price));
                } else {
                    setProductsByCategory(res.data.products?.sort((p1, p2) => p2.price - p1.price));
                }
            })
    }, [selectedCategory?.categoryId]);

    return (
        <>
            <Navbar />
            <h1>Catalogue</h1>
            <div>
                <label>
                    Filtrer par : 
                    <ShopCategorySelect 
                        selectedCategory={selectedCategory} 
                        setSelectedCategory={setSelectedCategory} 
                    />
                </label>
                <label>
                    Trier : 
                    <select onChange={handleChangeSorting} value={sorting}>
                        <option value={"asc"}>du - cher au + cher</option>
                        <option value={"desc"}>du + cher au - cher</option>
                    </select>
                </label>
            </div>
            <div className={"d-flex justify-content-around"}>
                {(productsByCategory?.length > 0) &&
                    productsByCategory?.map(product => <ProductCard key={product?.productId} product={product} />
                )}
            </div>

            <nav aria-label="Catolog navigation" className="mt-3 d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    {Array.from({length: pageCount}, (_, index) => index + 1).map((i) => 
                        <li key={i} className="page-item"><a className="page-link" href="#">{ i }</a></li>
                    )}
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </>
    );
}