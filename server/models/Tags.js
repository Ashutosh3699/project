const mongoose = require("mongoose");

const TagSchema = new  mongoose.Schema({

    TagName: {
        type: String,
        required:true
    },
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        trim:true
    }]

});

module.exports = mongoose.model("Tags",TagSchema);