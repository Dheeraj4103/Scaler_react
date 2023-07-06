import mongoose from "mongoose";

const OrdersSchema = mongoose.Schema({
    products: {
        type: Array,
        default: []
    },
    subTotal: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    tax: {
        type: Number,
        default: 0,
        required: true
    },
    total: {
        type: Number,
        default: 0,
        required: true
    }

}, { timestamps: true });

const Orders = mongoose.model("Orders", OrdersSchema);

export default Orders;