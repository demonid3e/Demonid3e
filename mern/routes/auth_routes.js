// need to find out what Router is
const {Router} = require("express");
const router = Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
// const { createIndexes } = require("../model/User");
const {check, validationResult} = require("express-validator");


// /api/auth/register
router.post(
    "/register", [
    check("email", "Incorrect Email").isEmail(),
    check("password", "Minimal Length of password is 6 symbols").isLength({min: 6})
    
    ],
    async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Wrong credential durring registration "
            })
        }


        // getting email and password from request body
        const {email, password} = req.body;
        // email: email because key is the same you can use just email
        const candidate = await User.findOne({email});
        // if candidate exists in DB returns 
        if (candidate) {
          return  res.status(400).json({message: "This user already exist"});
        }

        //using bcrypt, hashing password what we receive 
        const hashedPassword = await bcrypt.hash(password, 12);
        // creating new user with email and password from hashedpassword
        const user = new User ({email, password: hashedPassword});
        // waiting for user to be saved
        await user.save();
        // when saved return json response with status
        res.status(201).json({message: "User has been created."});


        // default catch with error element 
    } catch (e) {
        res.status(500).json({message: "Something went wrong, please try again"});
    }


});

// /api/auth/login
router.post("/login",
[
    check("email", "Enter correct email").normalizeEmail().isEmail(),
    check("password", "Enter password").exists()
], 
    async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Wrong credential durring login "
            })
        }

        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "User is not found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)   {
            return res.status(400).json({message: "Wrong password, try again"})
        }

        const token = jwt.sign(
            {  userId: user.id },
            config.get("jwtSecret"),
            { expiresIn: "1h"}
        )
            res.json({token, userId: user.id})
        // default catch with error element 
    } catch (e) {
        res.status(500).json({message: "Something went wrong, please try again"});
    }
});

module.exports = router;