const express = require("express");
const router = express.Router();
const userController = require('../../controllers/admin/authController')

router.post("/admin/signin", userController.signin);

router.post("/admin/signup", userController.signup);

router.post('/profile',userController.requireSignin, (req,res)=>{
    res.status(200).json({
        user: 'profile'
    })
})

module.exports = router;
