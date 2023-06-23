const User = require("../../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email.toLowerCase() })
        .then((user) => {
            if (user) {
                res.status(200).json({
                    message: "admin already exist",
                });
            } else {
                const { firstName, lastName, email, password } = req.body;
                User.create({
                    firstName,
                    lastName,
                    email,
                    password,
                    userName: Math.random().toString(),
                    role: 'admin'
                })
                    .then((resp) => {
                        res.status(200).json({
                            message: "admin has been created",
                        });
                    })
                    .catch((err) => {
                        res.send(err);
                    });
            }
        })
        .catch((err) => {
            res.send(err);
        });
};

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email.toLowerCase() })
        .then((user) => {
            if (bcrypt.compareSync(req.body.password, user.hash_password) && user.role === 'admin') {
                const token = jwt.sign(
                    { _id: user._id },
                    process.env.JWT_SECRET,
                    { expiresIn: "1h" }
                );

                const { _id, firstName, lastName, email, role, fullName } =
                    user;

                res.status(200).json({
                    token,
                    user: {
                        _id,
                        firstName,
                        lastName,
                        email,
                        role,
                        fullName,
                    },
                });
            } else {
                console.log("some error");
                res.status(400).json({
                    error: "some error",
                });
            }
        })
        .catch((err) => {
            res.status(400).json({
                err,
            });
        });
};

exports.requireSignin = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log(user);
    req.user = user;
    next();
};
