const Product = require("../models/Product");
const express = require("express")
const router = express.Router();


//! Get All Product
router.get("/get-all", async (req, res) => {
    try {
        const Products = await Product.find();
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json(error);
    }
})


//! Create
router.post("/add-product", async (req, res) => {
    try {
        console.log(req.body)
        const newProduct = new Product(req.body)
        await newProduct.save();
        res.status(200).json("Eklendi");
    } catch (error) {
        res.status(500).json(error);
    }
})


//! Update
router.put("/update-product", async (req, res) => {
    try {
        await Product.findOneAndUpdate({_id : req.body._id}, req.body)
        res.status(200).json("güncellendi")
    } catch (error) {
        res.status(500).json(error);
    }
})


//! Delete
router.delete("/delete-product", async (req, res) => {
    try {
        await Product.findOneAndDelete({_id : req.body._id});
        res.status(200).json("Silindi")
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;