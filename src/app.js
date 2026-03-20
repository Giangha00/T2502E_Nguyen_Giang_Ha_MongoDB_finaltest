const express = require("express");
const path = require("path");
const orderRoute = require("./routes/orderRoute");
const orderProductRoute = require("./routes/orderProductRoute");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/orders", orderRoute);
app.use("/order-products", orderProductRoute);

module.exports = app;
