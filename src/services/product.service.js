const { StatusCodes } = require("http-status-codes");

const { ProductRepository } = require("../repository");
const AppError = require("../utils/error/AppError");

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
        return await productRepository.getProduct(id);
    } catch (error) {
        console.log(error);
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    createProduct,
    getProductByCategory,
    getProduct,
};
