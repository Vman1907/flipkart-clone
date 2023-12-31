const jwt = require('jsonwebtoken')

exports.requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        // console.log(user," inside signin ")
    } else {
        return res.status(400).json({ message: "Authorization required" });
    }
    next();
};
