import React, { memo, useEffect } from "react";

import ProductCard from "../ProductCard";

import styles from './ProductList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { loadingProducts } from "../../Store/Products";


function ProductList({ categoryId }) {

    console.log('ProductList rendered');

    const dispatch = useDispatch();
    const products = useSelector(state => state.productList);

    
    
    useEffect(() => {
        dispatch(loadingProducts(categoryId))
    }, [categoryId, dispatch]);

    if (!categoryId) {
        return <div>Select A Category</div>
    }

    else if (products.isLoading) {
        return <div>Loading....</div>
    } else if (products.products.length > 0){

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
    } else {
        return (
            <div>No products found. Choose a different Category</div>
        )
    }
};

export default memo(ProductList);