import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../ProductCard";
import styles from "./OrderList.module.css"

function OrderList() {
    console.log('OrderList rendered');

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function loadOrders() {
            try {
                const response = await fetch("http://localhost:3001/orders?_sort=id&_order=desc");
                const data = await response.json();
                setIsLoading(false);
                setOrders(data);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        }
        loadOrders();
    }, []);

    

  if (isLoading) {
        return <div>Loading....</div>
    } else if (orders.length > 0){

        return (
            <div>
            {
                orders.map((order) => {
                    return (<div key={order.id} className={styles.list}>
                        <div>Order #{order.id}</div>
                        <div>
                            {
                                order.products.map((product, index) => { 
                                    return (
                                        <div key={product.id}>
                                            {`${index+1}. ${product.title} x ${product.quantity}`}
                                            <br />
                                        </div>
                                    )
                                 }) 
                            }
                            
                        
                        </div>
                    </div>)
                })
            } 
            </div>
            
        );
    } else {
        return (
            <div>No Orders found. Place an Order now !!</div>
        )
    }
};

export default OrderList;