import mongoose from "mongoose";

const CategoriesSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Categories = mongoose.model("Categories", CategoriesSchema);

export default Categories;