import React, { memo, useEffect } from "react";

import ProductCard from "../ProductCard";

import styles from './ProductList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { loadingProducts } from "../../Store/Products";


function ProductList() {

    console.log('ProductList rendered');

    const dispatch = useDispatch();
    const products = useSelector(state => state.productList);

    const selectedCategoryId = useSelector(state => state.categories.selectedCategoryId);
    
    useEffect(() => {
        dispatch(loadingProducts(selectedCategoryId))
    }, [selectedCategoryId]);

    if (!selectedCategoryId) {
        return <div>Selct A Category</div>
    }

    else if (products.isLoading) {
        return <div>Loading....</div>
    } else {

        return (
            <div className={styles.list}>
                {products.products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    )
                }
                )}
            </div>
        );
    };
};

export default memo(ProductList);