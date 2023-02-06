const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    ProductName: String,
    CategoryName: String,
   
});

module.exports = mongoose.model("Product", productSchema);