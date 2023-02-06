const Category = require("../model/Category");

// Get All categorys
const category_all = async (req, res) => {
    try {
        const categorys = await category.find();
        res.json(categorys);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single category
const category_details = async (req, res) => {
    try {
        const category = await category.findById(req.params.categoryId);
        res.json(category);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New category
const category_create = async (req, res) => {
    const category = new category({
        categoryName: req.body.categoryName,
        CategoryName: req.body.CategoryName
      });
    
      try {
        const savedcategory = await category.save();
        res.send(savedcategory);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update category
const category_update = async (req, res) => {
    try {
        const category = {
          categoryName: req.body.categoryName,
         
          CategoryName: req.body.CategoryName
          
        };
    
        const updatedcategory = await category.findByIdAndUpdate(
          { _id: req.params.categoryId },
          category
        );
        res.json(updatedcategory);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete category
const category_delete = async (req, res) => {
    try {
        const removecategory = await category.findByIdAndDelete(req.params.categoryId);
        res.json(removecategory);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    category_all, 
    category_details, 
    category_create, 
    category_update, 
    category_delete
}