const env = require("dotenv");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/admin/adminAuthRoutes");
const categoryRoute = require('./routes/categoryRoute')
const adminDeleteRoute=require('./routes/admin/adminDeleteRoutes');
//enviroment variable or constant
env.config();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use('/api', categoryRoute);
app.use('./api', adminDeleteRoute);

//db connection
mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.2px6x.mongodb.net/${process.env.MONGO_DB_DATABASE}`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "hello from server",
    });
});

app.post("/data", (req, res, next) => {
    res.status(200).json({
        message: req.body,
    });
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
