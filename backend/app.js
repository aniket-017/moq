
const express = require("express");
const app = express();
const path = require("path");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

// DB_URI = "mongodb://localhost:27017/PartCode"

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route Imports
// const product = require("./routes/productRoute");
const venue = require("./routes/venueRoute")
const user = require("./routes/userRoute")

// app.use("/api/z1",product);
app.use("/aak/l1",venue);
app.use("/aak/l1",user);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app
