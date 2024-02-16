const router = require("express").Router();

const { productController } = require("../../controller");
const { productMiddleware } = require("../../middlewares");

router.post(
    "/",
    productMiddleware.productCreateMiddleware,
    productController.createProduct
);

router.get("/", productController.getProductByCategory);

router.get("/:id", productController.getProduct);

router.put("/:id", productController.updateProduct);

module.exports = router;
