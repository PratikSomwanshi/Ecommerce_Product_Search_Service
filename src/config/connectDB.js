const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/error/AppError");
const { ServerConfig } = require(".");

async function connectDB() {
    try {
        await mongoose.connect(ServerConfig.MONGODB_URI);
    } catch (error) {
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    connectDB,
};
