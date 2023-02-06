const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    CategoryID: String,
    CategoryName: String,
   
});

module.exports = mongoose.model("Category", categorySchema);