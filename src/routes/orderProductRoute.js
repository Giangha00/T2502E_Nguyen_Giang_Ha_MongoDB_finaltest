const orderProductController = require("../controllers/orderProductController");
const express = require("express");
const router = express.Router();

router.get("/", orderProductController.getOrderProducts);
router.get("/:id", orderProductController.getOrderProductById);
router.post("/", orderProductController.createOrderProduct);
router.put("/:id", orderProductController.updateOrderProduct);
router.delete("/:id", orderProductController.deleteOrderProduct);

module.exports = router;
