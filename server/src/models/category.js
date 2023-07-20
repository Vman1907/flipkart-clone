const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require,
            trim: true,
        },
        slug: {
            type: String,
            require,
            unique: true,
        },
        parentId: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);