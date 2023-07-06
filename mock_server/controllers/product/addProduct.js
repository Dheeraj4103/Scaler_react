import Product from "../../models/Product.js";

const addProduct = async (req, res) => {
    try {
        const { id, title, categoryId, price, link } = req.body;
        const product = new Product({
            id,
            title,
            categoryId,
            price,
            link,
        });

        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default addProduct;
