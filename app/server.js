require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

const db = require("./config/db");
const bookRoute = require("./routes/book");
const authorRoute = require("./routes/author");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

const app = express();

db.connect();

app.use(cors());
app.use(morgan("common"));
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/api/v1/author", authorRoute);
app.use("/api/v1/book", bookRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);

app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});
