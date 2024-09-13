const mongoose = require("mongoose");

const ProductImageSchema = new  mongoose.Schema({

    title:{
        type:String,
    },
    image: {
        type:String
    },

})

module.exports = mongoose.model("ProductImage",ProductImageSchema);