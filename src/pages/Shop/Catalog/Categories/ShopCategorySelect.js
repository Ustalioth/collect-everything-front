import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { selectCategories } from "redux/shopSlice";


export const ShopCategorySelect = (props) => {

    const { selectedCategory, setSelectedCategory } = props;

    const categories = useSelector(selectCategories);

    const handleChangeCategory = (e) => setSelectedCategory({categoryId: parseInt(e.target.value)});

    useEffect(() => {

    }, [selectedCategory]);

    return(
        <>
            <select onChange={handleChangeCategory} value={selectedCategory?.categoryId || ''}>
                {(categories?.length > 0) && categories?.map(category =>
                    <option key={category?.categoryId} value={category?.categoryId}>
                        { category?.name }
                    </option>
                )}
            </select>
        </>
    )
}