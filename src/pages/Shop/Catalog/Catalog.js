import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { Navbar } from "pages/Shop/Navbar/Navbar";
import { ProductCard } from "./Product/ProductCard";
import { ShopCategorySelect } from "./Categories/ShopCategorySelect";

export const Catalog = () => {

    let { categoryId } = useParams();

    const [products, setProducts] = useState([]);
    const [sorting, setSorting] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [maxNumberProductsPerPage, setMaxNumberProductsPerPage] = useState(8);
    const [pageCount, setPageCount] = useState(1);

    const handleChangeSorting = (e) => setSorting(e.target.value);

    useEffect(() => {
        setProducts(products?.sort((p1, p2) => p1.price - p2.price));
    }, [sorting]);

    useEffect(() => {
        setPageCount(Math.ceil(products?.length/maxNumberProductsPerPage) || 1)
    }, [products, maxNumberProductsPerPage]);

    return (
        <>
            <Navbar />
            <h1>Catalogue</h1>
            <div>
                <label>
                    Filtrer par : 
                    <ShopCategorySelect categoryId={categoryId} setProducts={setProducts} />
                </label>
                <label>
                    Trier : 
                    <select onChange={handleChangeSorting}>
                        <option value={"asc"}>du - cher au + cher</option>
                        <option value={"desc"}>du + cher au - cher</option>
                    </select>
                </label>
            </div>
            <div className={"d-flex justify-content-around"}>
                {(products?.length > 0) &&
                    products?.map(product => 
                        <ProductCard key={product?.productId} product={product} />
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