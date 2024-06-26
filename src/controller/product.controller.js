const { StatusCodes } = require("http-status-codes");

const { productService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { ServerConfig } = require("../config");

async function createProduct(req, res) {
    try {
        const response = await productService.createProduct({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            seller: req.body.seller,
        });

        SuccessResponse.message = "successfully created the product";
        SuccessResponse.data = response;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.CREATED).json(ErrorResponse);
    }
}

async function getProductByCategory(req, res) {
    try {
        const response = await productService.getProductByCategory({
            category: req.query.category,
        });

        SuccessResponse.message = "successfully created the product";
        SuccessResponse.data = response;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.CREATED).json(ErrorResponse);
    }
}

async function getProduct(req, res) {
    try {
        const response = await productService.getProduct({
            id: req.params.id,
        });

        SuccessResponse.message = "successfully fetch the product";
        SuccessResponse.data = response;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.CREATED).json(ErrorResponse);
    }
}

async function updateProduct(req, res) {
    try {
        //
        const response = await productService.updateProduct({
            id: req.params.id,
            data: req.body,
        });

        SuccessResponse.message = "successfully updated the product";
        SuccessResponse.data = response;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getSellerProduct(req, res) {
    try {
        const response = await productService.getSellerProduct({
            id: req.body.id,
        });

        SuccessResponse.message = "successfully fetch the product";
        SuccessResponse.data = response;

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.CREATED).json(ErrorResponse);
    }
}

async function getRecentSellerProduct(req, res) {
    try {
        const response = await productService.getRecentProduct({
            id: req.body.id,
        });

        SuccessResponse.message = "successfully fetch the product";

        SuccessResponse.data = response;

        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
}

async function uploadProductImage(req, res) {
    try {
        SuccessResponse.message = "successfully created the product";
        SuccessResponse.data = {
            image_url: `${ServerConfig.CURRENT_SERVER_URL}/images/${req.file.filename}`,
        };

        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log(error);

        ErrorResponse.error = error;
        return res.status(StatusCodes.CREATED).json(ErrorResponse);
    }
}

module.exports = {
    createProduct,
    getProductByCategory,
    getProduct,
    updateProduct,
    getSellerProduct,
    getRecentSellerProduct,
    uploadProductImage,
};
