const router = require("express").Router();
const path = require("path");

const { productController } = require("../../controller");
const { productMiddleware } = require("../../middlewares");
const multer = require("multer");

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
    "/upload",
    upload.single("product"),
    productController.uploadProductImage
);

router.post("/", productController.createProduct);

router.get("/", productController.getProductByCategory);

router.get("/:id", productController.getProduct);

router.put("/:id", productController.updateProduct);

router.post("/seller", productController.getSellerProduct);

router.post("/seller/recent", productController.getRecentSellerProduct);

module.exports = router;
