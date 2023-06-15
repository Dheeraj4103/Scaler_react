const db = require("./connection");
const express = require("express");
const mongodb = require("mongodb");
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

async function getCollection(collection_name) {
  const database = await db();
  const collection = database.collection(collection_name);
  return collection;
}

app.get("/categories", async (req, res) => {
  try {
    const categories = await getCollection("categories");
    const category = await categories.find().toArray();
    res.status(200).json(category);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
app.get("/categories/:categoryId/products", async (req, res) => {
  try {
    const product = await getCollection("product");
    const { categoryId } = req.params;
    const products = await product
      .find({ categoryId: parseInt(categoryId) })
      .toArray();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.post("/orders", async (req, res) => {
  try {
    const orders = await getCollection("orders");
    const { products, subTotal, discount, tax, total } = req.body;
    const order = await orders.insertOne({
      products,
      subTotal,
      discount,
      tax,
      total,
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server port ${PORT}`));
