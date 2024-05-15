const mongoose = require("mongoose");
const BillSchema = mongoose.Schema(
    {
        customerName: { type: String, required: true },
        customerPhoneNumber: { type: String, required: true },
        paymentMode: { type: String, required: true },
        cartItems: { type: Array, required: true },
        subTotal: { type: Number, required: true },
        tax: { type: Number, required: true },
        totalAmount: { type: Number, required: true },
        createdAt: { type: String, required: true }
    },
    { timeStamp: true }
)

const Bill = mongoose.model("Bills", BillSchema);
module.exports = Bill;