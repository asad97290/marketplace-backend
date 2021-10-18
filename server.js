const express = require("express");
const connectDB = require("./src/config/db");
const app = express();
var cors = require("cors");
const upload = require("express-fileupload");
const PORT = process.env.PORT || 5000;
const adminRouter = require("./src/routes/adminRouter");
require("dotenv").config();

//Connect Database
connectDB();


//File Upload Middleware
app.use(upload());

//Init Middleware
app.use(express.urlencoded({ limit: "10mb", extended: false }));
app.use(express.json({ limit: "10mb", extended: true }));

app.use(cors());

app.use("/api/v1", adminRouter);


app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
