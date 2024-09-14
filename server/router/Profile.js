const express = require("express");
const profileRouter = express.Router();

const {updateProfile, deleteProfile, getAllUserDetails, getBroughtProducts} = require("../controller/Profile");

// import middlewares
const {isAuth} = require("../middleware/Auth");

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
profileRouter.put("/updateProfile", isAuth, updateProfile);
profileRouter.delete("/deleteProfile", isAuth, deleteProfile);
profileRouter.get("/getAlluserDetails", isAuth, getAllUserDetails);
profileRouter.get("/getBroughtProducts", isAuth,getBroughtProducts);


module.exports = profileRouter

