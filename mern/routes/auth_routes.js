const {Router} = require("express");
const router = Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
// const { createIndexes } = require("../model/User");
const {check, validationResult} = require("express-validator");


// /api/auth/register
router.post(
    "/register", [
    check("email", "Incorrect Email").isEmail(),
    
    ],
    async (req, res) => {
    try {

        const {email, password} = req.body;
        // email: email because key is the same you can use just email
        const candidate = await User.findOne({email});

        if (candidate) {
          return  res.status(400).json({message: "This user already exist"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User ({email, password: hashedPassword});

        await user.save();

        res.status(201).json({message: "User has been created."});



    } catch (e) {
        res.status(500).json({message: "Something went wrong, please try again"});
    }


});

// /api/auth/login
router.post("/login", async (req, res) => {
    try {

 

    } catch (e) {
        res.status(500).json({message: "Something went wrong, please try again"});
    }
});

module.exports = router;