const {Router} = require("express");
const router = Router();
const User = require("../model/User");


// /api/auth/register
router.post("/register", async (req, res) => {
    try {

        const {email, password} = req.body;
        // email: email because key is the same you can use just email
        const candidate = await User.findOne({email});

        if (candidate) {
          return  res.status(400).json({message: "This user already exist"});
        }


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