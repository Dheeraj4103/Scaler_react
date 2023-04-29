import React, {memo} from "react";
import styles from './ProductCard.module.css'
import AddToCart from "../AddToCart";
import ReduxAddToCart from "../ReduxAddToCart";

function ProductCard({ product }) {
    
    console.log('ProductCart rendered', product.id)

    return (
        <div className={styles.card}>
            <img src={product.link}  className={styles.img} alt="" />
            <h2>{product.title}</h2>
            <h3>Rs.{product.price} </h3>
            {/* <AddToCart
                className={`${styles.btn} ${styles.green}`}
                product={product}
            /> */}
            <ReduxAddToCart
                className={`${styles.btn} ${styles.green}`}
                product={product}
            />
            <button className={`${styles.btn} ${styles.red}`}>Buy Now</button>
        </div>
    ); 
};

export default memo(ProductCard);