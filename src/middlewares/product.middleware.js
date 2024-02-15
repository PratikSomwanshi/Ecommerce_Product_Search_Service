const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/error/AppError");
const { ErrorResponse } = require("../utils/common");

function productCreateMiddleware(req, res, next) {
    try {
        if (!req.body.name) {
            throw new AppError(
                "name not found in upcoming request",
                StatusCodes.BAD_REQUEST
            );
        }

        if (!req.body.image) {
            throw new AppError(
                "image not found in upcoming request",
                StatusCodes.BAD_REQUEST
            );
        }

        if (!req.body.description) {
            throw new AppError(
                "description not found in upcoming request",
                StatusCodes.BAD_REQUEST
            );
        }

        if (!req.body.category) {
            throw new AppError(
                "category not found in upcoming request",
                StatusCodes.BAD_REQUEST
            );
        }

        if (!req.body.price) {
            throw new AppError(
                "price not found in upcoming request",
                StatusCodes.BAD_REQUEST
            );
        }

        if (!req.body.seller) {
            throw new AppError(
                "seller not found in upcoming request",
                StatusCodes.BAD_REQUEST
            );
        }

        next();
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    productCreateMiddleware,
};
