const orderProductModel = require("../models/orderProductModel");

exports.get = async () => {
  try {
    const orderProducts = await orderProductModel.find();
    return orderProducts;
  } catch (error) {
    throw error;
  }
};

exports.getById = async (id) => {
  try {
    const orderProduct = await orderProductModel.findById(id);
    return orderProduct;
  } catch (error) {
    throw error;
  }
};

exports.create = async (orderProductData) => {
  try {
    const newOrderProduct = new orderProductModel(orderProductData);
    return await newOrderProduct.save();
  } catch (error) {
    throw error;
  }
};

exports.update = async (id, orderProductData) => {
  try {
    const updatedOrderProduct = await orderProductModel.findByIdAndUpdate(
      id,
      orderProductData,
      { new: true },
    );
    return updatedOrderProduct;
  } catch (error) {
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const deletedOrderProduct = await orderProductModel.findByIdAndDelete(id);
    return deletedOrderProduct;
  } catch (error) {
    throw error;
  }
};

exports.module = exports;
