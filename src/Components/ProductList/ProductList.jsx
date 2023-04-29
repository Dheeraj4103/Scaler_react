import React, { memo, useEffect, useState } from "react";

import ProductCard from "../ProductCard";

import styles from './ProductList.module.css'

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

async function getAPICall(callback) {
    console.log('API called');
    // const response = fetch("http://localhost:3001/products");
    // response.then((data) => {
    //     console.log("Mock Successful", data);
    // }).catch((error) => {
    //     console.log("Error", error);
    // })
    // console.log(data);

    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    console.log(data);
    setTimeout(() => {
        callback(data);
    }, 2000);
};



function ProductList() {

    console.log('ProductList rendered');

    const [state, setstate] = useState({
        products: [],
        isLoading: true
    });
    
    useEffect(() => {
        // console.log('API call Started', isLoading, products);
        getAPICall((result) => {
            const newState = {
                products: result,
                isLoading: false
            }
            setstate(newState);
        });
    }, []);

    if (state.isLoading) {
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