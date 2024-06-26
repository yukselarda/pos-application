const User = require("../models/User.js");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

//! register
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log("username", username)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        Math.random()
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        newUser.save().then(() => res.status(200).json("Eklendi"))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({ error: "User not found!" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword) {
            res.status(403).send("Yanlışsın")
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(400).json(error)
    }
})
module.exports = router;