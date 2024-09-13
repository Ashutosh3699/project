const mongoose = require("mongoose");

const userSchema = new  mongoose.Schema({

    firstName : {
        type: String,
        required:true,
        trim:true
    },
    lastName : {
        type: String,
        required:true,
        trim:true
    },
    email : {
        type: String,
        required:true,
        trim:true
    },
    password: {
        type:String,
        required:true,
        trim: true
    },
    token: {
        type: String
    },
    resetTokenexpires: {
        type:Date
    },
    accountType:{
        type:String,
        enum: ["Client", "Admin"],
        required:true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    image: {
        type:String,
        trim:true
    },
    accountDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    },
    accountProducts: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Products"
    }

})

module.exports = mongoose.model("User",userSchema);