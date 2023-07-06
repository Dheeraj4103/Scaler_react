import express from "express";
import getCategories from "../controllers/categories/getCategories.js";
import addCategory from "../controllers/categories/addCategory.js";
import productsRouter from "./product.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", addCategory);
router.use("/products", productsRouter);

export default router;