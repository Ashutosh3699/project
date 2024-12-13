const express = require("express");
const productRouter = express.Router();

const {createProduct,createProductImage,getAllproducts,getProductDetail,
    deleteProductImage, updateProduct, updateProductImage} = require("../controller/ProductController");

const {createCategories,getAllCategories,updateCategory,
    getCategoryProducts,getTagsProducts} = require("../controller/Categories");

const {capturePayment, findUnpaidPayments, PaymentStatusUpdate,ProductHistory} = require("../controller/Payment")

// import middlewares
const {isAuth, isAdmin, isClient} = require("../middleware/Auth");

// ********************************************************************************************************
//                                      Product routes
// ********************************************************************************************************
// product router apis
productRouter.post("/createProduct", isAuth,isAdmin, createProduct);
productRouter.post("/createProductImage", isAuth,isAdmin, createProductImage);
productRouter.post("/updateProduct", isAuth, isAdmin, updateProduct);
productRouter.delete("/deleteProductImage", isAuth,isAdmin, deleteProductImage);
productRouter.post("/updateProductImage", isAuth,isAdmin, updateProductImage);

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

// ********************************************************************************************************
//                                      payment routes
// ********************************************************************************************************
productRouter.post("/capturePayment", isAuth,isClient, capturePayment);
productRouter.post("/findUnpaidPayments", isAuth,isAdmin, findUnpaidPayments);
productRouter.post("/PaymentStatusUpdate", isAuth,isAdmin, PaymentStatusUpdate);
productRouter.post("/ProductHistory", isAuth,isClient, ProductHistory);


module.exports = productRouter
