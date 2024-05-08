const Category = require("../models/Category");
const express = require("express")
const router = express.Router();


//! Get All Category
router.get("/get-all", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories)
    } catch (error) {
        console.log(error);
    }
})


//! Create
router.post("/add-category", async (req, res) => {
    try {
        console.log(req.body)
        const newCategory = new Category(req.body)
        await newCategory.save();
        res.status(200).json("Eklendi");
    } catch (error) {
        res.status(400).json(error)
    }
})


//! Update
router.put("/update-category", async (req, res) => {
    try {
        await Category.updateOne({ _id: req.body._id}, req.body)
        res.status(200).json("güncellendi")
    } catch (error) {
        res.status(500).json(error);
    }
})


//! Delete
router.delete("/delete-category", async (req, res) => {
    try {
        await Category.deleteOne({ _id: req.body._id });
        res.status(200).json("Silindi")
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;