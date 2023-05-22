import React from "react";
import { Link } from "react-router-dom";
import OrderList from "../OrderList/OrderList";
import { memo } from "react";

function OrderPage() {
    return (
        <div>
            <div>
                <Link to="/">Go to Home</Link>
            </div>
            
            <OrderList/>
        </div>
    );
};

export default memo(OrderPage);