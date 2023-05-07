import React, { memo, useEffect, useState } from "react";

import ProductCard from "../ProductCard";

import styles from './ProductList.module.css'
import { useSelector } from "react-redux";

const _products = [
    {
        title: "Apple iPhone 14",
        price: "60,000"
    },
    {
        title: "Samsung Galaxy M31",
        price: "20,000"
    },
    {
        title: "Samsung Galaxy S23",
        price: "60,000"
    },
    {
        title: "One Plus 11 Nord",
        price: "40,000"
    },
    {
        title: "Asus rog",
        price: "80,000"
    },
    {
        title: "Vivo",
        price: "30,000"
    }
]






function ProductList() {

    console.log('ProductList rendered');

    const [state, setstate] = useState({
        products: [],
        isLoading: true
    });

    const selectedCategoryId = useSelector(state => state.categories.selectedCategoryId);
    
    useEffect(() => {
        // console.log('API call Started', isLoading, products);
        async function getAPICall(callback) {
            try {
                const response = await fetch(`http://localhost:3001/categories/${selectedCategoryId}/products`);
                const data = await response.json();
                setstate({
                    products: data,
                    isLoading: false
                });
            } catch (e) {
                console.log(e);
           }
        };
        getAPICall();
    }, [selectedCategoryId]);

    if (!selectedCategoryId) {
        return <div>Selct A Category</div>
    }

    else if (state.isLoading) {
        return <div>Loading....</div>
    } else {

        return (
            <div className={styles.list}>
                {state.products.map((product) => {
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