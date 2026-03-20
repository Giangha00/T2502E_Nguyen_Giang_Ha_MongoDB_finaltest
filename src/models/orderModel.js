const mongoose = require("mongoose");
const OrderProductSchema = require("./orderProductModel");

const OrderSchema = new mongoose.Schema(
  {
    orderid: {
      type: Number,
      required: [true, "orderid bắt buộc"],
      unique: true,
    },
    products: {
      type: [OrderProductSchema],
      required: [true, "products bắt buộc"],
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: "products phải là mảng và không được rỗng",
      },
    },
    total_amount: {
      type: Number,
      required: [true, "total_amount bắt buộc"],
      min: [0, "total_amount phải >= 0"],
    },
    delivery_address: {
      type: String,
      required: [true, "delivery_address bắt buộc"],
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Order", OrderSchema, "OrderCollection");
