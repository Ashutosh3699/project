const jwt = require("jsonwebtoken");
require("dotenv").config();
// authentication  for id
exports.isAuth = async(req,res,next) =>{
    try {
        const token =  req.cookies.token || req.body.token ||  req.header("Authorization").replace("Bearer ", "");
        console.log("token is okay");
        if(!token || token===undefined){

            res.status(401).json({
                success:false,
                message: "invalid token, token is not provided"
            })
        }
        try {
            
            const payload =  jwt.decode(token,process.env.JWT_SECRET);

            req.user = payload;
            // console.log("req.user is: ", req.user);

        } catch (error) {
            
            // console.log("error", error);
            res.status(401).json({
                success:false,
                message: "token is not valid"
            })
        }
        
        next();
    } catch (error) {
        
            console.log("error", error);
            res.status(500).json({
                success:false,
                message: "error found in authentication"
            })
    }
}

// authorization of student
exports.isClient = async(req,res,next) =>{
    try {
        
        const {accountType} = req.user;

        if(accountType !== "Client"){
            res.status(401).json({
                success:false,
                message: "this is a protected route for only STUDENT"
            })
        }

        next();
    } catch (error) {
        
        console.log("error", error);
            res.status(500).json({
                success:false,
                message: "error found in authorization in student"
            })
    }
}

// authorization of admin
exports.isAdmin = async(req,res,next) =>{
    try {
        
        const {accountType} = req.user;
        // console.log("acctount : ", accountType);

        if(accountType !== "Admin"){
            res.status(401).json({
                success:false,
                message: "this is a protected route for only Admin"
            })
        }

        next();
    } catch (error) {
        
        console.log("error", error);
            res.status(500).json({
                success:false,
                message: "error found in authorization in Admin"
            })
    }
}