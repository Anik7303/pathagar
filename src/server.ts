import dotenv from "dotenv";
import express from "express";
import path from "path";

// load environment variables if not in 'production' environment
if (process.env.NODE_ENV !== "production")
  dotenv.config({ path: path.join(__dirname, "..", ".env") });

// routes
import testRoutes from "./routes/test";

// middlewares
import { catchAllError, notFoundError } from "./middlewares/error";

// variables
const PORT = process.env.PORT || "8000";

const app = express();

// parse incoming data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// add public files
app.use(express.static(path.join(__dirname, "..", "public")));

// use routes
app.use(testRoutes);

// error middlewares
app.use(notFoundError);
app.use(catchAllError);

app.listen(parseInt(PORT), () => {
  console.log(`Address: http://localhost:${PORT}`);
});
