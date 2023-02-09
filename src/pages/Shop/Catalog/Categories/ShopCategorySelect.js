import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import testData from "../../../../services/Data/categories.json";


export const ShopCategorySelect = (props) => {

    const {categoryId, setProducts} = props;
    let {shopName} = useParams();

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({categoryId: parseInt(categoryId)}) || null;

    const handleChangeCategory = (e) => setSelectedCategory({categoryId: parseInt(e.target.value)});

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ADDRESS + 'store/api/store/' + shopName, {timeout: 1})
            .then(res => {
                axios.get(process.env.REACT_APP_API_ADDRESS + 'product/api/categories/store/' + res?.data?.storeId)
                    .then(response => {
                        setCategories(response.data);
                        setSelectedCategory(response.data[0].categoryId);
                    })
            })
            .catch(err => {
                //for tests
                let defaultCategory = (selectedCategory?.categoryId) ? selectedCategory : testData.shop.test[0];
                setCategories(testData.shop.test);
                setSelectedCategory(defaultCategory);
            });
    }, []);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ADDRESS + 'store/api/store/' + shopName, {timeout: 1})
            .then(res => {
                axios.get(process.env.REACT_APP_API_ADDRESS + 'product/api/category/' + res?.data?.storeId + '/' + selectedCategory.categoryId)
                    .then(response => setProducts(response.data))
            })
            .catch(err => 
                setProducts(testData.shop.test.filter(category => category?.categoryId === selectedCategory.categoryId)[0]?.products)
            )
    }, [selectedCategory]);

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