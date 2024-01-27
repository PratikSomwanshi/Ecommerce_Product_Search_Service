const router = require("express").Router();
const path = require("path");

const multer = require("multer");
const { productController } = require("../../controller");
const { productMiddleware } = require("../../middlewares");

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(
            null,
            `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
        );
    },
});

const upload = multer({ storage: storage });

router.post(
    "/",
    productMiddleware.productCreateMiddleware,
    productController.createProduct
);

router.post(
    "/upload",
    upload.single("product"),
    productController.uploadProductImage
);

router.get("/", productController.getProductByCategory);

router.get("/:id", productController.getProduct);

module.exports = router;
