const path = require("path");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
}

const express = require("express");

// environment variables
const HOST = process.env.HOST || "172.0.0.1";
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(PORT, HOST, () => {
    console.log(`Server address: http://${HOST}:${PORT}`);
});
