const mongoose = require("mongoose");
const OrderProductSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      required: [true, "product_id bắt buộc"],
      trim: true,
    },
    product_name: {
      type: String,
      required: [true, "product_name bắt buộc"],
      trim: true,
    },
    size: {
      type: String,
      required: [true, "size bắt buộc"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "price bắt buộc"],
      min: [0, "price phải >= 0"],
    },
    quantity: {
      type: Number,
      required: [true, "quantity bắt buộc"],
      min: [1, "quantity phải >= 1"],
    },
  },
  { _id: false },
);

module.exports = OrderProductSchema;
