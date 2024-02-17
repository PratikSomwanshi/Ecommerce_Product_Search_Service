const router = require("express").Router();

const { productController } = require("../../controller");
const { productMiddleware } = require("../../middlewares");

router.post("/", productController.createProduct);

router.get("/", productController.getProductByCategory);

router.get("/:id", productController.getProduct);

router.put("/:id", productController.updateProduct);

router.post("/seller", productController.getSellerProduct);

module.exports = router;
