import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        categoryId: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;