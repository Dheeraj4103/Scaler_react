import React, { useState } from "react";
import CartContent from "./CartContent";
import styles from "./Cart.module.css"
import { useDispatch, useSelector } from "react-redux";
import { hidecart, removefromcart, showcart } from "../../Store/cart";
import {Link} from 'react-router-dom'
import CartPage from "../../Pages/CartPage/CartPage";

function Cart() {
    // const [active, setActive] = useState(false);
    console.log("in cart component");
    // const dispatch = useDispatch();
    // const active = useSelector(state => {
    //     return state.cart.isCartOpen;
    // })

    // function toggleActive() {
    //     if (active) {
    //         dispatch(hidecart());
    //     }
    //     else {
    //         dispatch(showcart());
    //     }
    // }

    // if (!active) {
    //     return (
    //         <div>
    //             <button onClick={toggleActive} className={styles.btn}
    //             >Cart</button>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div className={styles.cart}>
    //             <button onClick={toggleActive} className={styles.btn}>Close</button>
    //             {/* <p>Activated</p> */}
    //             <CartContent />
           
    //         </div>
    //     );
    // }

    return <Link to="/cart" className={styles.btn}>Open Cart</Link>
}

export default (Cart);