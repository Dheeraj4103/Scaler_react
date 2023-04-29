// import React, { useState } from "react";
// import CountDown from "./Components/CountDown";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
// import CartContext from "./contexts/CartContext";
import styles from './App.module.css';
import { useDispatch, useSelector } from "react-redux";
// import { addtocart, removefromcart } from "./store";




function App() {

    /* 
    cart = {
        <product.id> : {
            id: Number,
            title: String,
            price: Number,
            quantity: Number
        }
    }
    */

    // const [cart, setCart] = useState({});
    const dispatch = useDispatch();
    const cart = useSelector(state => {
        return state.items;
    })

    console.log('App rendered');

    // function increaseQuantity(product) {
    //     dispatch(addtocart(product));
        
    // }

    // function decreaseQuantity(product) {

    //     dispatch(removefromcart(product));
    // }

    return (
        
            <div className={styles.content}>
                <ProductList className={styles.main} />
                <Cart cart={cart} className={styles.cart} />
            </div>
    );
}

export default App