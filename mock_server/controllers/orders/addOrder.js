import Orders from "../../models/Orders.js";

const addOrder = async (req, res) => {
  try {
    const { products, id, subTotal, discount, tax, total } = req.body;

    const order = new Orders({
      products,
      id,
      subTotal,
      discount,
      tax,
      total,
    });

    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default addOrder;