const express = require("express");
const productRouter = express.Router();

const {createProduct,createProductImage,getAllproducts,getProductDetail,
    deleteProductImage} = require("../controller/ProductController");

const {createCategories,getAllCategories,updateCategory,
    getCategoryProducts,getTagsProducts} = require("../controller/Categories")

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
productRouter.post("/getProductDetail",getProductDetail);
// ********************************************************************************************************
//                                      Categories routes
// ********************************************************************************************************
productRouter.post("/createCategories", isAuth,isAdmin, createCategories);
productRouter.post("/updateCategory", isAuth,isAdmin, updateCategory);

productRouter.get("/getAllCategories", getAllCategories);
productRouter.post("/getCategoryProducts",getCategoryProducts);
productRouter.post("/getTagsProducts",getTagsProducts);





module.exports = productRouter
