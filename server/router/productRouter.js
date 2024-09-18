const express = require("express");
const productRouter = express.Router();

const {createProduct,createProductImage,getAllproducts,getProductDetails,deleteProductImage} = require("../controller/ProductController");

// import middlewares
const {isAuth, isAdmin} = require("../middleware/Auth");

// ********************************************************************************************************
//                                      Product routes
// ********************************************************************************************************
// product router apis
productRouter.post("/createProduct", isAuth,isAdmin, createProduct);
productRouter.post("/createProductImage", isAuth,isAdmin, createProductImage);
productRouter.delete("/deleteProductImage", isAuth,isAdmin, deleteProductImage);

productRouter.get("/getAllproducts", getAllproducts);
productRouter.get("/getProductDetails",getProductDetails);


module.exports = productRouter
