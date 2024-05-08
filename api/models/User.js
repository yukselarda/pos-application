const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
    {
        userName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timeStamp: true }
)

const User = mongoose.model("Users", UserSchema);
module.exports = User;