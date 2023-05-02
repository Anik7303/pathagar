const path = require("path");

// load environment variables when not in production mode
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
}

const express = require("express");
const helmet = require("helmet");

// environment variables
const HOST = process.env.HOST || "172.0.0.1";
const PORT = process.env.PORT || 5000;

const app = express();

app.use(helmet());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.listen(PORT, HOST, () => {
    console.log(`Server address: http://${HOST}:${PORT}`);
});
