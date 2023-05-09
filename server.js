const path = require("path");

// load environment variables when not in production mode
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: path.join(__dirname, ".env") });
}

const express = require("express");
// const helmet = require("helmet"); // TODO: uncomment before publishing to server

// environment variables
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 5000;

const app = express();

// app.use(helmet()); // TODO: uncomment before publishing to server
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

// app.use("/*", (_req, res) => res.sendFile(path.join("build", "index.html")));

app.listen(PORT, HOST, () => {
    console.log(`Server address: http://${HOST}:${PORT}`);
});
