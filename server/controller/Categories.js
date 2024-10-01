const Category = require("../models/Category");
const Tags = require("../models/Tags");

// only admin can only create the category
exports.createCategories=async(req,res)=>{

    try {
        // fetch data and and create it into the database
        const {categoryName,tagName} = req.body;

        // validation
        if(!categoryName || !tagName){
            return res.status(400).json({
                success:false,
                message:"Please put all the data",
            })
        }
        const alreadyExist = await Category.findOne({categoryName});
        if(alreadyExist){
            return res.status(400).json({
                success:false,
                message:"already exist"
            })
        }
        // enter the category in database
        const categoryRes = await Category.create({
            categoryName
        });

        console.log("categoryRes response is: ", categoryRes);
        // enter the tag in database
        const tagRes = await Tags.create({
            TagName:tagName
        });
        console.log("tag response is: ", tagRes);

        const response = await Category.findByIdAndUpdate(categoryRes._id,{
            $push:{
                subCategory:tagRes._id         
              }
        },{new:true})
        console.log("final response is: ", response);
        const allCategory = await Category.find({});

        return res.status(200).json({
            success:true,
            message:"Category and tag inserted in it successfully",
            data:allCategory
        })
        
    } catch (error) {
        console.log("error at category Create is: ", error.message);
        return res.status(500).json({
            success:false,
            message:"error at category creation"
        })
    }
}

//  only for admin update the category and tags
exports.updateCategory=async(req,res)=>{

    try {
        // get category id
        const {categoryId, tagName} = req.body;

         // validation
         if(!categoryId || !tagName){
            return res.status(400).json({
                success:false,
                message:"Please put all the data",
            })
        }

        // enter the tag in database
        const tagRes = await Tags.create({
            TagName:tagName
        });
        console.log("tag response is: ", tagRes);

        const response = await Category.findByIdAndUpdate(categoryId,{
            $push:{
                subCategory:tagRes._id
            }
        })
        console.log("final response is: ", response);

    } catch (error) {
        console.log("error at category Update is: ", error.message);
        return res.status(500).json({
            success:false,
            message:"error at category updation"
        })
    }
}

// for all users
exports.getAllCategories = async(req,res)=>{
    try {
        
        // fetch all the categories and tags
        const response = await Category.find({}).populate("subCategory").exec();
        console.log("response of geting all the categories : ", response);
        if(!response){

            return res.status(404).json({
                success:false,
                message:"Error while fetching the response"
            })
        }

        return res.status(200).json({
            success:true,
            message:"fetch all the categories and tags",
            data:response
        })
    } catch (error) {
        console.log("error is: ", error);
        return res.status(404).json({
            success:false,
            message:"Error while fetching the response",
            error:error.message
        })
    }
}

// fetch all the data according to categories 
exports.getCategoryProducts= async(req,res)=>{

    try {
        // get category id and validate it
        const {categoryId} = req.body;

        // validation
        if(!categoryId){
            return res.status(404).json({
                success:false,
                message:"Please provide all the data properly"
            })
        }

        const response = await Category.findById(categoryId).populate({
            path:"subCategory",
            populate:"product"
        });

        console.log("response is: ", response);

        if(!response){
            return res.status(404).json({
                success:false,
                message:"Get category and product error",
            })
        }
        
        return res.status(200).json({
            success:true,
            data:response,
            message: "get all product according to category"
        })


    } catch (error) {
        console.log("error is: ", error);
        return res.status(404).json({
            success:false,
            message:"Error while getCategoryProducts",
            error:error.message
        })
    }
}

// fetching the data according to tags
exports.getTagsProducts = async(req,res)=>{

    try {

        const {tagId} = req.body;

        if(!tagId){
            return res.status(400).json({
                success:false,
                message:"provide Tag id "
            })
        }

        const response = await Tags.findById(tagId).populate("product").exec();

        console.log("response is: ", response);

        if(!response){
            return res.status(404).json({
                success:false,
                message:"Get tag  and product error",
            })
        }
        
        return res.status(200).json({
            success:true,
            data:response,
            message: "get all product according to tags"
        })
        
    } catch (error) {
        console.log("error is: ", error);
        return res.status(404).json({
            success:false,
            message:"Error while getTagsProducts",
            error:error.message
        })
    }
}