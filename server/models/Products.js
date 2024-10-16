const mongoose = require("mongoose");

const productSchema = new  mongoose.Schema({

  productName: {
    type: String,
    required:true,
  },
  productDetail: {
    type:String,
    required:true
  },
  thumbnail: {
    type:String,
    required:true
  },
  image: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ProductImage",
  }],
  price: {
    type: String,
    required:true,
  },
  whatWeWillget: {
    type:String,
    trim:true
  },
  clientBrought: [{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
  }],
  instructions: {
    type: [String],
  },
  tags:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Tags",
    required:true,
  },
  quantity:{
    type:Number,
    default:0,
    required:true,
  },
  inStock:{
    type:String,
    enum: ["in Stock", "out of Stock"],
    default:"out of Stock",
    required:true,
  }

})

module.exports = mongoose.model("Products",productSchema);