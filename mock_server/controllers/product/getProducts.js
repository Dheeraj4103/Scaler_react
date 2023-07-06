import Product from "../../models/Product.js";

const getProducts = async (req, res) => {
    try {
        const { selectedCategoryId } = req.params;
        const products = await Product.find({ categoryId: parseInt(selectedCategoryId) });
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export default getProducts;