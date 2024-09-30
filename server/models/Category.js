const mongoose = require("mongoose");

const categorySchema = new  mongoose.Schema({

    categoryName: {
        type: String,
        required:true
    },
    subCategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tags",
        required:true,
        trim:true
    }]

});

module.exports = mongoose.model("Category",categorySchema);