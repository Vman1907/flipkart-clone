const express = require("express");
const categoryController = require("../controllers/categoryController");
const { requireSignin } = require("../middleware/requireSignin");
const Access = require("../middleware/userAdminAccess");

const router = express.Router();

router.post(
    "/category/create",
    requireSignin,
    Access.isAdmin,
    categoryController.createCategory
);
router.get("/category/getCategory", categoryController.getCategory);

module.exports = router;
