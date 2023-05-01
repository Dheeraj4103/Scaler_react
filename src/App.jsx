// import React, { useState } from "react";
// import CountDown from "./Components/CountDown";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
// import CartContext from "./contexts/CartContext";
import styles from './App.module.css';
import { useDispatch, useSelector } from "react-redux";
import store1 from './Store/index';
import Categories from "./Components/Categories";
// import { addtocart, removefromcart } from "./store";
console.log('multiple reducer',store1.getState());



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
        return state.cart.items;
    })

    console.log('App rendered');

    // function increaseQuantity(product) {
    //     dispatch(addtocart(product));
        
    // }

    // function decreaseQuantity(product) {

    //     dispatch(removefromcart(product));
    // }

    return (
        
        <div >
            <Categories />
            <div className={styles.content}>
                <ProductList className={styles.main} />
                <Cart cart={cart} className={styles.cart} />
                </div>
            </div>
    );
}

export default App