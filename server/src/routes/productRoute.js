const express = require("express");
// const categoryController = require("../controllers/categoryController");
const { requireSignin } = require("../middleware/requireSignin");
const Access = require("../middleware/userAdminAccess");
const Product=require('../models/product');
const router = express.Router();

router.post(
    "/product/create",
    requireSignin,
    Access.isAdmin,
    (req,res)=>{
        res.status(200).json({message: 'Hello'});
    }
);
// router.get("/category/getCategory", categoryController.getCategory);

module.exports = router;
