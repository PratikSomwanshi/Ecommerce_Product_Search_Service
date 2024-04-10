const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    CURRENT_SERVER_URL: process.env.CURRENT_SERVER_URL,
};
