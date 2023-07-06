import Categories from "../../models/Categories.js";

const addCategory = async (req, res) => {
    try {
        const { id, name } = req.body;
        const newCategory = new Categories({ id, name });
        const addedCategory = await newCategory.save();
        res.status(201).json(addedCategory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export default addCategory;