const orderProductService = require("../services/orderProductService");

exports.getOrderProducts = async (req, res) => {
  try {
    const orders = await orderProductService.get();
    res.status(200).json(orders);
  } catch (error) {
    throw error;
  }
};

exports.getOrderProductById = async (req, res) => {
  try {
    const order = await orderProductService.getById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    throw error;
  }
};

exports.createOrderProduct = async (req, res) => {
  try {
    const newOrder = await orderProductService.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    throw error;
  }
};

exports.updateOrderProduct = async (req, res) => {
  try {
    const updatedOrder = await orderProductService.update(
      req.params.id,
      req.body,
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    throw error;
  }
};

exports.deleteOrderProduct = async (req, res) => {
  try {
    const deletedOrder = await orderProductService.delete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    throw error;
  }
};

exports.module = exports;
