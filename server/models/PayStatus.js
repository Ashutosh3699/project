const mongoose = require("mongoose");

const paymentSchema = new  mongoose.Schema({

  productId: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required:true,
  },
  userId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },
  quantity:{
    type:Number,
    default:0,
    required:true,
  },
  invoice:{
    type:String,
    required:true,
  },
  payStatus:{
    type:String,
    enum: ["done", "not yet"],
    default:"not yet",
    required:true,
  }

})

module.exports = mongoose.model("Payments",paymentSchema);