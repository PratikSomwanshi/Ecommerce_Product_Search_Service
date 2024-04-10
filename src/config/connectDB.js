const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/error/AppError");

const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        // console.log(MONGODB_URI);
    } catch (error) {
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    connectDB,
};
