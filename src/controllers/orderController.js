const orderService = require("../services/orderService");

exports.getOrders = async (req, res) => {
  try {
    const orders = await orderService.get();
    res.status(200).json(orders);
  } catch (error) {
    throw error;
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await orderService.getById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    throw error;
  }
};

exports.createOrder = async (req, res) => {
  try {
    const newOrder = await orderService.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    throw error;
  }
};

exports.createManyOrders = async (req, res) => {
  try {
    const orders = req.body;
    const newOrders = await orderService.createMany(orders);
    res.status(201).json(newOrders);
  } catch (error) {
    throw error;
  }
};

exports.updateDeliveryAddress = async (req, res) => {
  try {
    const { orderid } = req.params;
    const { delivery_address } = req.body;
    const updatedOrder = await orderService.updateDeliveryAddress(
      Number(orderid),
      delivery_address,
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    throw error;
  }
};

exports.renderOrderView = async (req, res) => {
  try {
    const orders = await orderService.get();
    const productCount = await orderService.countProductId("somi");

    const tableRows = [];
    orders.forEach((order) => {
      order.products.forEach((product) => {
        const total = product.price * product.quantity;
        tableRows.push({
          product_name: product.product_name,
          price: product.price,
          quantity: product.quantity,
          total,
          orderid: order.orderid,
          delivery_address: order.delivery_address,
        });
      });
    });

    const totalAmountFromDB = orders.reduce(
      (sum, order) => sum + order.total_amount,
      0,
    );
    res.render("orders", {
      orders,
      tableRows,
      totalAmountFromDB,
      productCount,
    });
  } catch (error) {
    throw error;
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await orderService.update(req.params.id, req.body);
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    throw error;
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderService.delete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    throw error;
  }
};

exports.module = exports;
