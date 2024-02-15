const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false, maxLength: 2000 },
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: ["kids", "men", "women"],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    seller: {
        type: String,
    },
});

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
