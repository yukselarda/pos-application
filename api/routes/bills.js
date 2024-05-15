const Bill = require("../models/Bill");
const express = require("express")
const router = express.Router();


//! Get All Product
router.get("/get-all", async (req, res) => {
    try {
        const Bills = await Bill.find();
        res.status(200).json(Bills)
    } catch (error) {
        res.status(500).json(error);
    }
})


//! Create
router.post("/add-bill", async (req, res) => {
    try {
        console.log(req.body)
        req.body.createdAt = new Date();
        const newBill = new Bill(req.body)
        await newBill.save();
        res.status(200).json("Eklendi");
    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports = router;