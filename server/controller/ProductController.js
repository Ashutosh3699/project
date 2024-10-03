const Products = require("../models/Products");
const ProductImage = require("../models/ProductImages");
const {fileAndImageUploader}   = require("../utils/imageUploader");
const Tags = require("../models/Tags");

require("dotenv").config();

exports.createProduct= async (req,res) =>{
    try {
        // fetch file and data
        let  {productName, productDetail, price, whatWeWillget,_instructions, tags} = req.body;

        const  thumbnail = req.files.thumbnail;

        console.log("body is : ",req.body);
        console.log("thumbnail is: ",thumbnail);
        if(!productName || !productDetail || !price || !whatWeWillget || !thumbnail  || !tags){
            return res.status(400).json({
                success:false,
                message: "Enter all the details",
            });
        }
        // check the instructor dont require a db call as we will get the instructor id only
        const admin_id = req.user.id;
        console.log("admin id is: ",admin_id);

        // image uploading
        const imageURL = await fileAndImageUploader(thumbnail, process.env.FOLDER_NAME);

        console.log("image url is : ", imageURL.secure_url);

        if(!imageURL){
            return res.status(404).json({
                success:false,
                message: "Image uploading is not available"
            });
        }

        // create a payload and enter in course db
        const response = await Products.create({
            productName,
            productDetail,
            whatWeWillget,
            price,
            thumbnail:imageURL.secure_url,
			instructions: _instructions,
            tags
        });

        console.log("Product created: ", response);
        // insert the product into tag
        const tagRes = await Tags.findByIdAndUpdate(tags,{
            $push:{
                product:response._id,
            }
        },{new:true})
        // take the output or not check here
        
        return res.status(200).json({
            success:true,
            data: response,
            message: "Product is created successfully",
        })
        
    } catch (error) {
        
        console.log("Error at creating Product , ", error);
        return res.status(500).json({
            success:false,
            error: error.message,
            message: "Product is NOT created ",
        })
    }
}

exports.updateProduct = async(req,res)=>{
    try {
        const { productId } = req.body
        const updates = req.body;

        const product = await Products.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "product not found" })
          }

          // If Thumbnail Image is found, update it
          if(req.files){
            console.log("thumbnail update");
            const thumbnail = req.files.thumbnailImage;
            const thumbnailImage = await fileAndImageUploader(thumbnail, process.env.FOLDER_NAME);

            product.thumbnail = thumbnailImage.secure_url;
          }

        // Update only the fields that are present in the request body
        for (const key in updates) {
            if (updates.hasOwnProperty(key)) {
              if (key === "instructions") {
                product[key] = JSON.parse(updates[key])
              } else {
                product[key] = updates[key]
              }
            }
          }

          await product.save();
          const response = await Products.findById(productId).populate("tags").
          populate("image").exec();

          res.status(200).json({
            success:"true",
            message: "product edited successfully",
            data:response,
          });
        }
        catch(error){
            res.status(500).json({
                success:"false",
                message: "product edited failed",
              });
        }

}

exports.getAllproducts = async(req,res) =>{
    try {
        // fetching the data from db and try another method
        const resposne = await Products.find({}).populate("image").exec();
        // populate and exec wala part baki hai
        return res.status(200).json({
            success:true,
            message:"Product fetched successfully",
            data:resposne
        })
    } catch (error) {
        
        console.log("Error at getting Product , ", error);
        return res.status(500).json({
            success:false,
            error: error.message,
            message: "Error occured while fetching the Product datas ",
        })
    }
}

// get course details
exports.getProductDetail = async(req,res)=>{
    try {
        // fetch the courseid and if any thing is required
        // console.log("body is: ", req.body);
        const {productId} = req.body;
        // console.log("productId: ",productId)
        
        // db call and get the detail 
        const response = await  Products.findOne({_id:productId}).populate("image").exec();
        console.log("response: ", response);

        // return response
        return res.status(200).json({
            success:true,
            message: "Product details successfully  done",
            data:response,
        })
    } catch (error) {
        return  res.status(500).json({
            success:false,
            message: "Error occured, Product details is not sent"
        })
    }
}

exports.createProductImage= async(req,res)=>{
    try {
        // fetch the data --> section_id, title, videoDetail, timeDuration
        const {product_id, title} = req.body;
        // fetch the file for video
        const image = req.files.image;
        console.log("image is: ",req.files.image )
        // validation
        if(!image || !product_id || !title ){

            return res.status(401).json({
                success:false,
                message: "Enter the details properly, incorrect fill of data"
            })
        }
        // get secured_url
        // console.log("first");
        const image_url = await fileAndImageUploader(image, process.env.FOLDER_NAME);
        console.log("image: ", image_url.secure_url);
        // create sub-section in db
        const productImage_id = await ProductImage.create({
            title,
            image:image_url.secure_url
        });
        // push the obj_id in section
        const  response  = await Products.findByIdAndUpdate(product_id, {
            $push: {
                image:productImage_id
            }
        }, {new:true}).populate("image").exec();
        // response
        return res.status(200).json({
            success: true,
            data:response,
            message: "created ProductImage successfully",
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Error occured while creating ProductImage",
            error:error.message
        })
    }
};

exports.updateProductImage = async(req,res)=>{

    try {
        // console.log("req.body is: ", req.body);
        const {productImageId, title} = req.body;

        if(!productImageId){

            return res.status(401).json({
                success:false,
                message: "Enter the details properly, incorrect fill of data"
            })
        }

        const imageRes = await ProductImage.findById(productImageId);
        if(!imageRes){
            return res.status(404).json({
                success: false,
                message: "SubSection not found",
              })
        }

        // console.log("image res is: ", imageRes);

        if(req.files && req.files.image !== undefined){
            // console.log("image in image: ");
            const image = req.files.image;
            const image_url = await fileAndImageUploader(image, process.env.FOLDER_NAME);
            // console.log("image: ", image_url.secure_url);
            // create sub-section in db
           imageRes.image= image_url.secure_url
        }


        if(title!==undefined){
            // console.log("image is at title : ", imageRes);
            imageRes.title = title
        }
        // console.log("image is : ", imageRes);
        await imageRes.save();

        return res.status(200).json({
            success:"true",
            message: "Image editte d successfully",
            data:imageRes
        })


    } catch (error) {
         return res.status(500).json({
            success:false,
            message: "Error occured while creating ProductImage",
            error:error.message
        })
    }
}

// deleteSubSection
exports.deleteProductImage = async(req,res)=>{
    try {
        // fetch the subsection id using params
        const {productImage_id, productId} = req.body;
         // validate the data
         if(!productImage_id ){
            return res.status(400).json({
                success:false,
                message: "Enter the data properly, all details are not available"
            });
        }
        // remove from the list 
        const response  = await Products.findByIdAndUpdate(productId,{
            $pull: {
                image:productImage_id
            }
        },{new:true}).populate("image").exec();

        await ProductImage.findByIdAndDelete(productImage_id);

        return res.status(200).json({
            success:true,
            message: "ProductImage is deleted successfully",
            data:response
        })
    } catch (error) {
        
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Error occured while deleting ProductImage",
        })
    }
}