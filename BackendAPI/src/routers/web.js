const express = require("express");
const router = express.Router();
const productRouter = require("./product");
const categoryRouter = require("./category");
const orderRouter = require("./order");

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/order", orderRouter);

module.exports = router;
