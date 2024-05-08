const { timeStamp } = require("console");
const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema(
    {
        title: { type: String, required: true },
    },
    { timeStamp: true }
)

const Category = mongoose.model("categories", CategorySchema);
module.exports = Category;