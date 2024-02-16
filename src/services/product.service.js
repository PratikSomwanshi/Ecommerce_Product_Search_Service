const { StatusCodes } = require("http-status-codes");

const { ProductRepository } = require("../repository");
const AppError = require("../utils/error/AppError");
const mongoose = require("mongoose");

const productRepository = new ProductRepository();

async function createProduct(data) {
    try {
        return await productRepository.createProduct(data);
    } catch (error) {
        console.log(error);
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

async function getProductByCategory(data) {
    try {
        return await productRepository.getProductByCategory(data);
    } catch (error) {
        console.log(error);
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

async function getProduct({ id }) {
    try {
        const response = await productRepository.getProduct(id);

        if (!response)
            throw new AppError("Product not found", StatusCodes.BAD_REQUEST);

        return response;
    } catch (error) {
        if (error.name == "CastError") {
            throw new AppError("Invalid Product Id", StatusCodes.BAD_REQUEST);
        }

        if (error instanceof AppError) throw error;
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

async function updateProduct({ id, data }) {
    try {
        const response = await productRepository.updateProduct(id, data);
        return response;
    } catch (error) {
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    createProduct,
    getProductByCategory,
    getProduct,
    updateProduct,
};
