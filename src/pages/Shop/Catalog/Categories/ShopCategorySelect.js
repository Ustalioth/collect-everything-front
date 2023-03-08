import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import axios from "axios";
import testData from "services/Data/categories.json";


export const ShopCategorySelect = (props) => {

    const {categoryId, setProducts} = props;

    let {shopName} = useParams();

    const categories = useSelector((state) => state.shop.categories);

    const [selectedCategory, setSelectedCategory] = useState({categoryId: parseInt(categoryId)}) || null;

    const handleChangeCategory = (e) => setSelectedCategory({categoryId: parseInt(e.target.value)});

    return(
        <>
            <select onChange={handleChangeCategory} value={selectedCategory?.categoryId || ''}>
                {(categories?.length > 0) && categories?.map(category =>
                    <option key={category?.categoryId} value={category?.categoryId}>{ category?.name }</option>
                )}
            </select>
        </>
    )
}