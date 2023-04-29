import React, { memo, useContext, useState } from "react";
import styles from '../AddToCart/AddToCart.module.css'
import CartContext from "../../contexts/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, removefromcart } from "../../store";

function ReduxAddToCart({ product, className }) {
    const dispatch = useDispatch();
    const quantity = useSelector(state => {
        return state.items[product.id]?.quantity || 0;
    });

    function increment() {
        dispatch(addtocart(product));
    }

    function decrement() {
        dispatch(removefromcart(product));
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

export default memo(ReduxAddToCart);