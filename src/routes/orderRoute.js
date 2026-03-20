const orderController = require("../controllers/orderController");
const express = require("express");
const router = express.Router();

router.get("/", orderController.getOrders);
router.get("/:id", orderController.getOrderById);
router.post("/", orderController.createOrder);
router.post("/batch", orderController.createManyOrders);
router.put("/:id", orderController.updateOrder);
router.patch(
  "/:orderid/delivery-address",
  orderController.updateDeliveryAddress,
);
router.delete("/:id", orderController.deleteOrder);

router.get("/view", orderController.renderOrderView);

module.exports = router;
