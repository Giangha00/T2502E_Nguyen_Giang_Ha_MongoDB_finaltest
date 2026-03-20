const orderModel = require("../models/orderModel");

exports.get = async () => {
  try {
    const orders = await orderModel.find();
    return orders;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (id) => {
  try {
    const order = await orderModel.findById(id);
    return order;
  } catch (error) {
    throw error;
  }
};

exports.getByOrderId = async (orderid) => {
  try {
    const order = await orderModel.findOne({ orderid });
    return order;
  } catch (error) {
    throw error;
  }
};

exports.createMany = async (ordersData) => {
  try {
    return await orderModel.insertMany(ordersData, { ordered: true });
  } catch (error) {
    throw error;
  }
};

exports.updateDeliveryAddress = async (orderid, delivery_address) => {
  try {
    const order = await orderModel.findOneAndUpdate(
      { orderid },
      { $set: { delivery_address } },
      { new: true },
    );
    return order;
  } catch (error) {
    throw error;
  }
};

exports.countProductId = async (product_id) => {
  try {
    const orders = await orderModel.find({ "products.product_id": product_id });
    let count = 0;
    orders.forEach((order) => {
      order.products.forEach((p) => {
        if (p.product_id === product_id) count += p.quantity;
      });
    });
    return count;
  } catch (error) {
    throw error;
  }
};

exports.create = async (orderData) => {
  try {
    const newOrder = new orderModel(orderData);
    return await newOrder.save();
  } catch (error) {
    throw error;
  }
};

exports.update = async (id, orderData) => {
  try {
    const updateOrder = await orderModel.findByIdAndUpdate(id, orderData, {
      new: true,
    });
    return updateOrder;
  } catch (error) {
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const deletedOrder = await orderModel.findByIdAndDelete(id);
    return deletedOrder;
  } catch (error) {
    throw error;
  }
};

module.exports = exports;
