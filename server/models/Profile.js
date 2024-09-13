const mongoose = require("mongoose");

const profileSchema = new  mongoose.Schema({

    phoneNumber: {
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    gender: {
        type:String,
        enum: ["Male","Female","Others"],
    },
    DOB:{
        type: String,
    }

})

module.exports = mongoose.model("Profile",profileSchema);