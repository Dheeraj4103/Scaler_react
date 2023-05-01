import React, { memo, useMemo } from "react";
import styles from './Cart.module.css'
// import CartContext from "../../contexts/CartContext";
// import AddToCart from "../AddToCart/AddToCart";
import ReduxAddToCart from "../ReduxAddToCart";
import { useSelector } from "react-redux";

function CartContent() {

    const cart = useSelector(state => {
        return state.cart.items;
    })
    const cartList = Object.values(cart);
    console.log("CartContent rendered", cartList);

    function getTotalPrice() {

        let total = 0;
        for (let i = 0; i < cartList.length; i++) {
            total += (cartList[i].quantity * cartList[i].price);
        }
        return total;
    }

    const total = useMemo(getTotalPrice, [cart]);

    if (cartList.length === 0) {
        return (
            <div >No Item in Cart !</div>
        );
    } else {
        return (
            <div>
                <ol >
                    {
                        cartList.map(cartItem => {
                            return (
                                <li key={cartItem.id} className={styles.list}>
                                    <div>{cartItem.title}</div>
                                    {/* <div>Quanitity:- {cartItem.quantity}</div> */}
                                    {/* <AddToCart product={cartItem} className={styles.btn} /> */}
                                    <ReduxAddToCart product={cartItem} className={styles.btn} />
                                    <div>Total Price:- {cartItem.quantity * cartItem.price}
                                    </div>
                                </li>
                            );
                        })
                    }
                </ol>
                < div >
                    <h1>Total:- {total}</h1>
                </div>
            </div>
        );
    }
};

export default memo(CartContent);