const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { ServerConfig, Connect } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use("/images", express.static("upload/images"));

app.use(cors());
app.use(morgan(":method :url :status :response-time ms :date[web]"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`server running on port ${ServerConfig.PORT}`);
    await Connect.connectDB();
});
