import express from "express";
import addProduct from "../controllers/product/addProduct.js";
import getProducts from "../controllers/product/getProducts.js";

const router = express.Router();

router.get("/:selectedCategoryId", getProducts);
router.post("/", addProduct);

export default router;