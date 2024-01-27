const router = require("express").Router();

const productRoute = require("./product.route");

router.use("/products", productRoute);

module.exports = router;
