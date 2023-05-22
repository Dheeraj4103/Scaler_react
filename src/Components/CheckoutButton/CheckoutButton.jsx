import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { placeOrder } from "../../Store/cart";
import styles from './CheckoutButton.module.css';



function CheckoutButton() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSubmitting = useSelector(state => state.cart.isSubmitting);
    const isSubmitSuccess = useSelector(state => state.cart.isSubmitSuccess);

    useEffect(() => {
        if (isSubmitSuccess) {
            console.log("in isSubmitSuccess");
            navigate('/orders')
        }
    }, [isSubmitSuccess]);


    function handlePlaceOrder() {
        dispatch(placeOrder());
    }


    return (
        <>
            <button onClick={handlePlaceOrder} className={styles.btn}>Place Order</button>
            {isSubmitting && <div>Placing Order....</div>}
        </>
    );
};

export default memo(CheckoutButton);