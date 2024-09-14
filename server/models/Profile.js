const mongoose = require("mongoose");

const profileSchema = new  mongoose.Schema({

    phoneNumber: {
        type:String,
    },
    address:{
        type:String,
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