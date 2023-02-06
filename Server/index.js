const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");



// connection to database
mongoose.connect("mongodb://localhost:27017/Nimap-infotech").then((connection) => {
  console.log("Connected to database");
  app.listen(3000, () => console.log("Server started"))}); 
  
// Import routes
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category")

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/products", productRoutes);
app.use("/api/categorys", categoryRoutes)

