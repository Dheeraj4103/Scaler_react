import React, { memo, useContext, useState } from "react";
import styles from './AddToCart.module.css'
import CartContext from "../../contexts/CartContext";

function AddToCart({ product, className }) {
    
    console.log('AddToCart rendered', product.id);
    const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const quantity = cart[product.id] ? cart[product.id].quantity : 0;

    function increment() {
        increaseQuantity(product);
    }

    function decrement() {
        decreaseQuantity(product);
    }

    if (quantity === 0) {
        return (
            <button className={className} onClick={increment}>Add To Cart</button>
        )
    } else {
        return (
            <div>
            <button onClick={decrement} className={styles.btn}>-</button>
            <span>{quantity}</span>
            <button onClick={increment} className={styles.btn}>+</button>
            </div>
        );
    }
};

export default memo(AddToCart);